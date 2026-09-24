:orphan:

TLA+-Bench
==========

TLA+-Bench measures how well language models turn natural-language descriptions
into TLA+ specifications, using parser and model-checker results rather than text
similarity.

.. raw:: html

   <div class="tla-bench">
     <section class="tb-intro" aria-label="Leaderboard snapshot">
       <div class="tb-intro-copy">
         <p class="tb-eyebrow">AI4FM / execution-grounded evaluation</p>
         <p class="tb-snapshot"><span class="tb-status-dot" aria-hidden="true"></span> Provisional snapshot · <time id="snapshot-date">14 September 2026</time></p>
         <p class="tb-intro-note">One greedy sample per task on the released 100-specification evaluation set. Only models with all 100 outputs checked appear in the ranking.</p>
       </div>
       <div class="tb-best" aria-label="Highest strict non-empty TLC result">
         <span>Highest strict TLC result</span>
         <strong id="top-score">18 / 100</strong>
         <span id="top-model">Nemotron 3 Ultra</span>
       </div>
     </section>

     <dl class="tb-facts tb-corpus-facts" aria-label="Benchmark corpus">
       <div><dt>Specifications</dt><dd>1,300</dd><small>13 public repositories</small></div>
       <div><dt>Gold</dt><dd>403</dd><small>Reference configuration and TLC checks</small></div>
       <div><dt>Silver</dt><dd>897</dd><small>Parse-checked specifications</small></div>
       <div><dt>Evaluation slice</dt><dd>100</dd><small>One response per model and task</small></div>
     </dl>

     <section class="tb-leaderboard" id="leaderboard" aria-labelledby="leaderboard-title">
       <header class="tb-section-head">
         <div>
           <p class="tb-eyebrow">Leaderboard</p>
           <h2 id="leaderboard-title">What the checkers accepted.</h2>
           <p>Sorted by strict TLC passes with a non-empty state space. Select a column heading to change the order.</p>
         </div>
         <label class="tb-search-label" for="model-search">Find a model
           <input id="model-search" type="search" placeholder="Search name or provider" autocomplete="off">
         </label>
       </header>

       <dl class="tb-facts tb-run-facts" aria-label="Snapshot coverage">
         <div><dt>Complete models</dt><dd id="complete-count">23 / 30</dd></div>
         <div><dt>Outputs checked</dt><dd id="output-count">2,300</dd></div>
         <div><dt>Scoring status</dt><dd>Provisional</dd></div>
       </dl>

       <div class="tb-table-scroll" role="region" aria-label="TLA+-Bench model leaderboard" tabindex="0">
         <table class="tb-table">
           <caption>Completed model results on the 100-specification evaluation set. Counts are out of 100 tasks.</caption>
           <thead>
             <tr>
               <th class="tb-rank" scope="col">Rank</th>
               <th scope="col" aria-sort="none"><button type="button" data-sort="name">Model</button></th>
               <th scope="col" aria-sort="none"><button type="button" data-sort="provider">Provider</button></th>
               <th scope="col" class="tb-number" aria-sort="none"><button type="button" data-sort="strictSany">Strict SANY</button></th>
               <th scope="col" class="tb-number" aria-sort="descending"><button type="button" data-sort="nonemptyTlc">Strict TLC<br>(non-empty)</button></th>
               <th scope="col" class="tb-number" aria-sort="none"><button type="button" data-sort="checked">Coverage</button></th>
             </tr>
           </thead>
           <tbody id="leaderboard-rows">
             <tr><td colspan="6">Loading the saved benchmark snapshot…</td></tr>
           </tbody>
         </table>
       </div>
       <p class="tb-table-status" id="leaderboard-status" aria-live="polite">Loading completed runs.</p>
     </section>

     <section class="tb-reading" aria-labelledby="reading-title">
       <div>
         <p class="tb-eyebrow">How to read this table</p>
         <h2 id="reading-title">Passing TLC is a necessary signal, not a semantic audit.</h2>
         <p>Strict SANY counts specifications whose semantic processing completed without error markers. Strict TLC counts completed model checks with no errors; the displayed score also requires at least one reachable state. Neither check establishes that a specification captures every behavior in its natural-language description.</p>
       </div>
       <dl class="tb-audit-facts" aria-label="Reference validation results">
         <div><dt>References passing strict SANY</dt><dd>98 / 100</dd></div>
         <div><dt>References passing strict TLC</dt><dd>97 / 100</dd></div>
         <div><dt>With non-empty state space</dt><dd>94 / 100</dd></div>
         <div><dt>Intent-audited model results</dt><dd>0</dd></div>
       </dl>
     </section>

     <section class="tb-related" aria-labelledby="related-title">
       <div class="tb-related-score" aria-label="Separate TLA-Prover results">
         <span>Related work</span>
         <strong>30%</strong>
         <small>Gold and Diamond pass@1 in the ICSOFT paper</small>
       </div>
       <div>
         <p class="tb-eyebrow">A different evaluation track</p>
         <h2 id="related-title">TLA-Prover</h2>
         <p>The paper's 30% result is from a separate held-out 30-problem specification-generation evaluation. The later protected prover gate measures TLAPS proof cases and was 0 / 119 in the 18 September 2026 status snapshot. These results are not part of this leaderboard.</p>
         <p class="tb-links"><a href="https://doi.org/10.5220/0015234600004088">Read the paper</a><a href="https://github.com/LUC-AI4FM/tla-prover/blob/main/site/status.json">Published status snapshot</a></p>
       </div>
     </section>

     <footer class="tb-source">
       <div>
         <p class="tb-eyebrow">Reproduce and inspect</p>
         <p>Snapshot from 14 September 2026 · 23 of 30 planned models complete · 2,300 outputs checked. Incomplete runs are omitted.</p>
         <p class="tb-caveat">The reference check passed strict TLC on 97 of the 100 tasks, and 94 also had a non-empty state space. Counts retain the full preselected denominator. Treat this snapshot as preliminary while reference issues and natural-language intent remain unaudited.</p>
       </div>
       <nav aria-label="Benchmark resources">
         <a href="https://github.com/LUC-AI4FM/tla_benchmark/tree/reviewer-release">Benchmark artifact</a>
         <a href="https://arxiv.org/abs/2607.23425">Paper and dataset details</a>
         <a href="../_static/data/tla-bench-results.json" download>Download results JSON</a>
       </nav>
     </footer>
   </div>
