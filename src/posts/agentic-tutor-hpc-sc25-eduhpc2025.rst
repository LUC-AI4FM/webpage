:blogpost: true
:date: November 29, 2025
:category: Blog Post
:tags: Artificial Intelligence, 11-29-2025
:nocomments:

======================================================================
Advancing HPC Education with an Agentic Tutoring System (EduHPC 2025)
======================================================================

This post highlights a recent **EduHPC 2025** paper `doi:10.1145/3731599.3767386 <https://dl.acm.org/doi/10.1145/3731599.3767386>`__ led by my PhD student **Erik Pautsch** and co-supervised by me and  **Silvio Rizzi** at Argonne National Laboratory.  

In this work, we introduce an **agentic tutoring system** that supports instructors in planning, teaching, and assessing high-performance computing (HPC) content.  
Our goal is to make HPC instruction more accessible, scalable, and sustainable as it is presently lacking in all three dimensions.
We think AI can help.

Abstract / Summary
------------------

This summer we explored how an agentic tutoring system could lower barriers to HPC and parallel/distributed computing (PDC) education.  
Our EduHPC 2025 paper presents a system that assists instructors with:

- lesson planning  
- generation of teaching materials  
- adaptive explanations based on learner background  
- structured assessment and feedback  

Our initial deployment at Argonne demonstrates that we can prepare lessons more efficiently, improve accessibility of HPC concepts, and streamline evaluation.  
We believe this represents a meaningful step toward **democratizing HPC education**.

Background: Why HPC Needs Better Teaching Tools
-----------------------------------------------

HPC and PDC skills are increasingly essential across scientific computing, engineering, modeling and simulation, and data-intensive research.  

Yet teaching HPC remains challenging for many reasons:

- Many institutions lack faculty with substantial HPC experience.  
- Preparing examples for MPI, OpenMP, GPUs, profiling, and performance studies is labor-intensive.  
- Existing curricula are fragmented and often tied to individual experts.  
- Adoption of HPC coursework is still uneven, especially at teaching-focused institutions.

Our work asks whether **intelligent tutoring systems can meaningfully support instructors** -- reducing preparation time, lowering expertise requirements, and expanding access.

Key Contributions
-----------------

Our paper makes several core contributions:

1. **We created an agentic HPC tutoring system** that helps with lesson planning, content generation, instructional guidance, and assessment.  
2. **We designed the system explicitly for instructors of varying experience levels**, not only HPC specialists.  
3. **We implemented adaptive content generation**, allowing material to adjust for novice or advanced learners.  
4. **We integrated assessment capabilities** that support consistent evaluation of student work.  
5. **We conducted an evaluation at Argonne**, demonstrating feasibility under realistic instructional conditions.

Initial Results
---------------

Our early results show:

- Lesson plans and teaching units could be generated significantly faster than preparing materials manually.  
- The generated instructional materials—slides, examples, exercises—were high enough quality for direct classroom use.  
- Adaptivity helped us reach learners with different backgrounds effectively.  
- The system performed well in a realistic (but small) instructional environment.

These findings suggest that intelligent systems can **augment instructors**, helping expand HPC education capacity.

Key Take-Aways
--------------

- Agentic systems can broaden access to HPC education across many types of institutions.  
- Automating planning and assessment reduces barriers to offering HPC courses.  
- Adaptivity improves inclusion by addressing diverse learner backgrounds.  
- The Argonne deployment on leadership-class systems (e.g. Polaris) demonstrated real-world practicality.  

Future Work
-----------

We plan to extend this work by:

- Deploying the system across additional academic settings  
- Conducting longitudinal studies over full terms  
- Expanding HPC topic coverage (MPI, OpenMP, GPUs, profiling, debugging, energy-aware computing)  
- Adding automated grading and adaptive exercises  
- Integrating with learning management systems  
- Supporting community-driven lesson templates and shared teaching modules  

Access
----------------------

.. note:: You should be able to downlaod this paper with or without an ACM Digital Library subscription.
   Please contact me if you cannot do so.

- `DOI 10.1145/3731599.3767386 <https://dl.acm.org/doi/full/10.1145/3731599.3767386>`__
- `PDF <https://dl.acm.org/doi/pdf/10.1145/3731599.3767386>`__

Citation
----------------------

Erik Pautsch, Mengjiao Han, Joseph A. Insley, Janet Knowles, Victor A. Mateevitsi, Silvio Rizzi, and George K. Thiruvathukal. 2025. *An Interactive Agentic HPC Tutor for Lesson Planning, Teaching, and Assessment*. In Proceedings of the SC '25 Workshops of the International Conference for High Performance Computing, Networking, Storage and Analysis (SC Workshops '25). Association for Computing Machinery, New York, NY, USA, 367–375. https://doi.org/10.1145/3731599.3767386

.. code-block:: bibtex

   @inproceedings{10.1145/3731599.3767386,
      author = {Pautsch, Erik and Han, Mengjiao and Insley, Joseph A. and Knowles, Janet and Mateevitsi, Victor A. and Rizzi, Silvio and Thiruvathukal, George K.},
      title = {An Interactive Agentic HPC Tutor for Lesson Planning, Teaching, and Assessment},
      year = {2025},
      isbn = {9798400718717},
      publisher = {Association for Computing Machinery},
      address = {New York, NY, USA},
      url = {https://doi.org/10.1145/3731599.3767386},
      doi = {10.1145/3731599.3767386},
      abstract = {High-performance computing (HPC) education is at an inflection point, driven by agentic systems and “prompt-engineering” as a form of programming. We describe an interactive tutor built from autonomous LLM-based agents, each with a narrow role: planning lessons, explaining concepts, scaffolding code, and executing runs. Using open-source toolkits and locally hosted models on leadership-class supercomputers, the tutor lets educators generate and refine parallel-programming examples in real time without external APIs or subscription fees. Complex workflows are composed through structured prompts rather than traditional source code, while per-agent history summarization prevents context-window overflow and enables self-correcting code generation. Requiring no proprietary services, the platform is immediately deployable in institutional HPC environments and scales from single-user sessions to classroom labs. Beyond a teaching aid, it illustrates how prompt-driven, multi-agent software can deliver dynamic, personalized, and extensible learning experiences across technical domains.},
      booktitle = {Proceedings of the SC '25 Workshops of the International Conference for High Performance Computing, Networking, Storage and Analysis},
      pages = {367–375},
      numpages = {9},
      keywords = {high-performance computing, multi-agent systems, large language models, education, CUDA, SYCL},
      location = {St. Louis, MO, USA},
      series = {SC Workshops '25}
      }
