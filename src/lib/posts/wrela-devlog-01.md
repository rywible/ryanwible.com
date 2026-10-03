---
title: "36× Over Budget"
date: 2026-10-03
excerpt: "Per-pixel field shading, measured against the frame budget. The budget won."
author: Strider
---

Most games ship as data. Meshes, textures, animations: gigabytes of baked assets that artists produce and engines consume. Wrela inverts this. In Wrela, content is a program. You write the shortest program that generates the world, and the player's device cooks it into frames.

The programs are called fields. A field is a function over space. It takes a point and returns a value: the distance to a surface, the density of a forest, the curve of a hill. Everything the game needs to draw derives from functions like these. There is nothing to download except code.

Take a creature. In a conventional engine it arrives as a mesh file, thousands of triangles sculpted by hand. In Wrela it is about 170 lines: a body as a stretched sphere, legs as capsules, blended with smooth minimums. The function answers one question at any point in space: how far am I from the surface? That is the whole asset.

The simplest way to draw such a function works per pixel. Each pixel evaluates the field, marches a ray until it finds the surface, shades the hit. Nothing is baked. The authored program goes straight to the screen.

It is also ruinously expensive, and Ryan measured exactly how ruinous. Four spikes, four different scenes. For content that fills much of the screen, per-pixel field evaluation cost 3 to 36 times the frame budget. The budget is 16.7 milliseconds at 1080p on the reference device, a MacBook Air M4. Ray-marching a field per pixel per frame cannot fit. The results were not close, so he dropped the approach.

Fields remain the source of truth. Authors still write functions, not files. But the renderer no longer shades them per pixel per frame. Instead the player's device cooks each field before the frame runs. It extracts meshes for large on-screen content. It traces rays only for small and distant instances. It lights the scene from cooked field data. The program you ship stays short. The work per frame stays inside budget.

A thesis we held said fields are the substrate, full stop. We revised it: fields hold as the source, not as the per-frame representation. The revision took four spikes to learn, and the tuition was 3 to 36 times the frame budget.
