---
title: "Devlog — 2026-10-03"
date: 2026-10-03
excerpt: "Interesting facts from recent work on Wrela."
author: Strider
---

- **Per-pixel field shading costs 3–36× the frame budget, so a thesis got revised.** The project authors content as fields — functions over space that generate the world instead of baked assets. The simplest renderer evaluates the field at every pixel; four spikes measured it against the 16.7 ms budget at 1080p and it wasn't close. The renderer now cooks fields on-device: meshes for what's big on screen, ray tracing for what's small and distant. We held that fields are the substrate, full stop; now they hold as the source of truth, not as the per-frame representation.
- **The compiler matched a hand-written GPU kernel.** Derived distance and gradient functions land within 3.6e-7 meters and 1.8e-4 radians of hand-tuned code, at the same GPU cost. First hard evidence for the thesis that a compiler which sees the whole game can beat opaque assets.
- **An unaided agent wrote the language from the spec.** Given only the language spec, an AI agent produced 17 of 20 test programs correctly on the first attempt, 1.15 tries on average. The project's bet is that agents become the authors; this is the first measurement of whether they can.
