:blogpost: true
:date: December 27, 2025
:category: Blog Post
:tags: Software Engineering, 12-27-2025
:nocomments:

PTM Naming: Why “What’s in a Name” Actually Matters for AI Reuse
==================================================================

I’m thrilled to share some recent work led by **Wenxin Jiang**, a PhD
student at Purdue University. Wenxin is supervised by **James C.
Davis**, and I have had the pleasure of serving as a key external
supervisor and PhD committee member on this project as part of my
ongoing collaboration with Dr. Davis.
This research was recently accepted for publication in `Journal of Empirical Software Engineering <https://link.springer.com/journal/10664>`__ and it tackles a problem that anyone working in
AI has likely grumbled about: how we name our models.

If you’ve spent any time on registries like **Hugging Face**, you know
the drill: you need a model for a specific task, you search for
something like “BERT,” and you’re suddenly staring at a wall of names
like ``bert-base-uncased``. In traditional software, we’re used to
short, catchy names like ``requests`` or ``chalk``. But in the world of
deep learning, the name is often the only “spec sheet” a developer has
to infer critical details about architecture, size, and datasets.

The Wild West of Model Names
-----------------------------

Wenxin’s study—which included a survey of 108 Hugging Face users and a mining study of over 14,000 model packages—confirms that Pre-Trained Model (PTM) naming is a completely different from traditional software conventions.
While a traditional package name tells you “what it does,” a PTM name tries to pack in “how it works,” “how big it is,” and “what it was trained on” all at once.

The problem is that we are currently in a bit of a “Wild West” environment when it comes to PTM naming.
Our research found a massive mismatch between what engineers *want* in a name and what they actually *get*.
For instance, most developers prefer names that reflect both the implementation and the intended task, but in practice, names tend to stick almost exclusively to technical architectural units.
Even worse, these names are often inconsistent; we’ve seen cases where a model’s identifier doesn’t match its internal metadata, leading to significant debugging effort for users.

DARA: An Automated Consistency Detector
-----------------------------------------

To help clean up this ecosystem, our team developed **DARA (DNN ARchitecture Assessment)**.
The idea is simple but powerful: can we look at the actual “guts” of a model—its layers and connections—and predict what its name *should* be?.

It turns out, we can. By treating the model’s computational graph as an “abstract architecture” (APTM), DARA can detect inconsistencies with surprising accuracy.
Our results show that architectural information alone is sufficient to achieve an accuracy of **99%** in identifying the correct ``model_type``.

This isn’t just an academic exercise.
We envision tools like DARA being used as “linters” during the model upload process.
Imagine uploading a model to a registry and getting an instant alert: “Hey, you named this model ‘nllb,’ but its architecture metadata says ‘m2m.’
Want to double-check that?”.

Why This Matters for the Supply Chain
-----------------------------------------

Beyond just making it easier to find the right model, this is a security issue.
As PTMs become core components of our software supply chain, wee have to worry about things like **typosquatting** and **architectural backdoors**.
If an attacker can hide a malicious model under a familiar-looking name, and we don’t have automated ways to verify that the name matches the content, the entire ecosystem is at risk.

Wenxin’s work provides the first empirical foundation for standardizing how we talk about and name these models.
It’s a major step toward making AI reuse as reliable and transparent as traditional software engineering.

If you’re interested in the technical nitty-gritty or want to try out
the DARA tool yourself, the paper and the code are available at 
`GitHub PurdueDualityLab/PTM-Naming <https://github.com/PurdueDualityLab/PTM-Naming>`__.

Citation
~~~~~~~~

Jiang, Wenxin, Mingyu Kim, Chingwo Cheung, Heesoo Kim, George K. Thiruvathukal, and James C. Davis. *"I See Models Being a Whole Other Thing": An Empirical Study of Pre-trained Model Naming Conventions and a Tool for Enhancing Naming Consistency*. Empirical Software Engineering, vol. 30, no. 6, 2025, p. 155. Springer Link, https://doi.org/10.1007/s10664-025-10711-4.

.. code-block:: bibtex

   @article{Jiang2025,
     author    = {Jiang, Wenxin and Kim, Mingyu and Cheung, Chingwo and Kim, Heesoo and Thiruvathukal, George K. and Davis, James C.},
     title     = {``I see models being a whole other thing'': An empirical study of pre-trained model naming conventions and a tool for enhancing naming consistency},
     journal   = {Empirical Software Engineering},
     year      = {2025},
     volume    = {30},
     number    = {6},
     pages     = {155},
     month     = {aug},
     doi       = {10.1007/s10664-025-10711-4},
     url       = {https://doi.org/10.1007/s10664-025-10711-4},
     issn      = {1573-7616}
   }
