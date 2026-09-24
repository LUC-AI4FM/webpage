(() => {
  const tableBody = document.getElementById('leaderboard-rows');
  const search = document.getElementById('model-search');
  const status = document.getElementById('leaderboard-status');
  const table = document.querySelector('.tb-table');
  const dataUrl = document.body.dataset.tlaBenchData;

  if (!tableBody || !search || !status || !table || !dataUrl) {
    return;
  }

  let models = [];
  let sortKey = 'nonemptyTlc';
  let sortDirection = 'desc';

  const displayName = (model) => {
    if (model.id === 'nemotron-3-ultra') return 'Nemotron 3 Ultra';
    return model.name.replaceAll('-', ' ').replaceAll('_', ' ');
  };

  const updateHeaderSort = () => {
    table.querySelectorAll('thead th').forEach((header) => {
      const button = header.querySelector('button[data-sort]');
      if (!button) {
        header.removeAttribute('aria-sort');
        return;
      }

      if (button.dataset.sort === sortKey) {
        header.setAttribute('aria-sort', sortDirection === 'asc' ? 'ascending' : 'descending');
      } else {
        header.setAttribute('aria-sort', 'none');
      }
    });
  };

  const makeCell = (tag, className, content) => {
    const cell = document.createElement(tag);
    if (className) cell.className = className;
    cell.textContent = content;
    return cell;
  };

  const render = () => {
    const query = search.value.trim().toLocaleLowerCase();
    const filtered = models.filter((model) => {
      const searchable = `${model.name} ${model.id} ${model.provider}`.toLocaleLowerCase();
      return searchable.includes(query);
    });

    filtered.sort((a, b) => {
      const first = a[sortKey];
      const second = b[sortKey];
      const comparison = typeof first === 'number'
        ? first - second
        : String(first).localeCompare(String(second), undefined, { sensitivity: 'base' });
      if (comparison === 0) {
        return b.nonemptyTlc - a.nonemptyTlc || a.id.localeCompare(b.id);
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    tableBody.replaceChildren();
    if (!filtered.length) {
      const row = document.createElement('tr');
      const cell = makeCell('td', 'tb-empty', 'No model matches that search.');
      cell.colSpan = 6;
      row.append(cell);
      tableBody.append(row);
    }

    filtered.forEach((model, index) => {
      const row = document.createElement('tr');
      row.append(makeCell('td', 'tb-rank', String(index + 1)));

      const nameCell = document.createElement('th');
      nameCell.scope = 'row';
      nameCell.className = 'tb-model';
      nameCell.append(makeCell('span', 'tb-model-name', displayName(model)));
      nameCell.append(makeCell('small', 'tb-model-id', model.id));
      row.append(nameCell);

      row.append(makeCell('td', 'tb-provider', model.provider));
      row.append(makeCell('td', 'tb-number', `${model.strictSany} / ${model.checked}`));

      const scoreCell = makeCell('td', 'tb-number tb-score', `${model.nonemptyTlc} / ${model.checked}`);
      const progress = document.createElement('progress');
      progress.className = 'tb-progress';
      progress.max = model.checked;
      progress.value = model.nonemptyTlc;
      progress.setAttribute('aria-label', `${model.nonemptyTlc} of ${model.checked} strict TLC runs passed with a non-empty state space`);
      scoreCell.append(progress);
      row.append(scoreCell);

      row.append(makeCell('td', 'tb-number', `${model.checked} / 100`));
      tableBody.append(row);
    });

    updateHeaderSort();
    const visible = filtered.length;
    const total = models.length;
    const sortLabel = sortKey === 'nonemptyTlc'
      ? 'strict non-empty TLC passes'
      : sortKey === 'strictSany'
        ? 'strict SANY passes'
        : sortKey === 'checked'
          ? 'coverage'
          : sortKey === 'provider'
            ? 'provider'
            : 'model name';
    status.textContent = query
      ? `Showing ${visible} of ${total} completed runs, ordered by ${sortLabel}.`
      : `Showing all ${total} complete runs, ordered by ${sortLabel}.`;
  };

  table.querySelectorAll('button[data-sort]').forEach((button) => {
    button.addEventListener('click', () => {
      if (sortKey === button.dataset.sort) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        sortKey = button.dataset.sort;
        sortDirection = sortKey === 'name' || sortKey === 'provider' ? 'asc' : 'desc';
      }
      render();
    });
  });

  search.addEventListener('input', render);

  fetch(dataUrl, { headers: { accept: 'application/json' } })
    .then((response) => {
      if (!response.ok) throw new Error(`Snapshot request failed with ${response.status}`);
      return response.json();
    })
    .then((data) => {
      models = data.models;
      const sorted = [...models].sort((a, b) => b.nonemptyTlc - a.nonemptyTlc || a.id.localeCompare(b.id));
      const leader = sorted[0];
      if (leader) {
        document.getElementById('top-score').textContent = `${leader.nonemptyTlc} / ${leader.checked}`;
        document.getElementById('top-model').textContent = displayName(leader);
      }
      document.getElementById('snapshot-date').textContent = new Date(`${data.snapshotDate}T00:00:00Z`)
        .toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
      document.getElementById('complete-count').textContent = `${data.evaluation.completeModels} / ${data.evaluation.plannedModels}`;
      document.getElementById('output-count').textContent = data.evaluation.completedOutputs.toLocaleString('en-US');
      render();
    })
    .catch(() => {
      tableBody.replaceChildren();
      const row = document.createElement('tr');
      const cell = makeCell('td', 'tb-empty', 'The saved leaderboard data could not be loaded. Use the results JSON link below to inspect the snapshot.');
      cell.colSpan = 6;
      row.append(cell);
      tableBody.append(row);
      status.textContent = 'Leaderboard data unavailable.';
    });
})();
