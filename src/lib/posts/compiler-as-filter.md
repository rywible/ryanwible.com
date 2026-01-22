---
title: The Compiler as a Filter
date: 2024-01-15
excerpt: Why strict type systems are actually a form of empathy.
---

When we build a compiler, we are often obsessed with performance. We want it to be fast. We want the output to be optimized.

But the most important job of a compiler is **communication**.

## The Error Message

A compiler error is not a punishment. It is a conversation. It is the machine telling you:

> "I think I know what you want to do, but this path leads to a crash. Try this instead."

In my new language, **Aether**, I am prioritizing error messages over everything else. The parser is designed to be forgiving, but the type checker is strict—and kind.

### Empathy in Syntax

Syntax is the user interface of a language. If the syntax is noisy, the user is exhausted. If the syntax is sparse, the user is confused.

We must find the balance. We must find the **silence** between the keywords.
