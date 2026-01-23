---
title: Wrela
date: 2026-01-22
excerpt: Ergonomics of a new programming language
---

I'm kind of obsessed with syntax. I think most programmers are. What feels cleanest? What variables are clearest without being unwieldy? How do I break this comment up to make the line more readable?

We make these choices on a daily basis, but we're all fundamentally constrained by the rules handed down to us by the language creators. Oh the friction, the grating feel of hands on keyboard when our own sensibilities grind against the will of the master.

So of course, why wouldn't I shake off these shackles and build my own language? You could call it hubris, but I'd like to frame it as learning. I'm a part of this world, and even if I'm shouting into the void, goddamnit, I'm gonna shout.

Wrela is an experimental programming language I’m building to explore how far grammar and readability can be pushed as tools for better domain modeling (among other things). "Wrela" is an utter nonsense word, but I like how it rolls off the tongue. 

Let me start with an example of what writing Wrela feels like:

```
A Whale:
    has:
        name: String

    can swim(distance: Number) -> Nothing:
        print("Hi! My name is {its.name} and I can swim {distance.toString()} yards!")

to make_moby_swim():
    moby = Whale(name="moby")
    moby.swim(500)

make_moby_swim()
```

Wrela is an indented language. I've always loved the flow of writing in Python, and I like that readability is coupled to scope. As you nest deeper and deeper, the code becomes uglier and uglier to look at. It's a good hint for refactoring.

There's another more aesthetic reason I love indentation that I can't explain to machines (and a non-zero percentage of devs): indented languages look lovely. Negative space is beautiful. The code I write can borrow from domains like poetry that use negative space to create emotional resonance beyond the words themselves.

There are some functional things going on here as well. In the object oriented languages I'm most familiar with, there is a fundamental break between how we think, write, and read about objects in English, versus how we think, write, and read about objects in code.

For example, consider how we would write our Whale class in Python:
```
class Whale:
    def __init__(self, name: str):
        self.name = name
    
    def swim(distance: int) -> None:
        print(f"Hi! My name is {self.name} and I can swim {distance.toString()}")
```

There are some nice things going on here (I do generally enjoy writing Python). There's the indent style, the clear(ish) syntax. It's terse. Clean.

Here's something though: If you were to read this in English, what would it read like? I would read it something like: "A class named Whale. To initialize, pass in 'name' which is a string. Self(?)'s name is a string. Oh swim is defined and takes a distance parameter. Swim can print out self(?).name and the passed in distance."

Pretty clear. But what is self? It's not *myself*. I'm not in the code. Oh, it's Whale's self. OK. But in English, grammatically, when we are the subject and we are examining an object, we do not use the word self. Self is a subject word referring to the observer. The Whale cannot observe itself, so why is it self-referential? From a scope standpoint, this can make sense if you squint. "Self" is from the perspective of the scope. The scope's "self" is what we're calling. But that requires us to keep two subjects in our head: us as the reader of the code, and the scope as the observer of its own class. Weird.

Wrela flips this around and tries to eliminate the impedance mismatch of dueling subjects. If we treat declarations as specs meant for the reader of the code, then the grammatically correct word becomes clear. A code "class" is not a human or a plurality of beings, it is an "it". So if we read the Wrela class spec, it reads as: "A Whale has an attribute called name that is a string. It can swim if passed distance which is a Number. swim prints out a message with 'its' name and the distance swim was given."

Notice how we didn't have to contort and hold two observers in our heads. We as the reader always remain as the one subject, and the Whale class remains as the object. I think that's nice.

The human readable definitions like "has" and "can" also force you into writing code in a particular style because of the grammatical constraints of English. For instance, if you wrote a function such as:
```
can blowhole()
```
Well... that sounds pretty weird. Because in English, a prefix of "can" requires a verb, which is exactly what functions ought to be! If our prior function's intent is to inspect the Whale's blowhole (I don't know how a Whale would do this to itself, but maybe they have a mechanism!) then we would simply rewrite it as:
```
can inspect_blowhole()
```
which is much clearer in intent. Top level function definitions serve the same purpose. "to" must prefix a verb.

But wait, let's rewind. This solves another classic OO problem: Objects acting on themselves! As programmers, we like to write things like:
```
class Order:
    def place():
        pass
        
order = Order()
order.place()
```

This has always bugged me. Orders can't place themselves! So I've intentionally nudged at that by clarifying the ownership syntax of methods on classes. In Wrela, this would be written as:
```
An Order:
    can place():
        pass
        
order = Order()
order.place()
```

Immediately, my spidey senses tingle. "Order can place..." But orders can't place! Well, maybe this means that my domain modelling is incorrect. Perhaps a pure function or a higher order class that wraps Order is a more accurate way to represent our spec. What if we wrote it like?:
```
to place_order():
    order = Order()
    # do whatever we do to place orders
```

This is a dumb example, but as domain models become more complicated, clarification of the spec is very important to retain business logic comprehension and proper modelling of invariants. I like that the language grammatically nudges you to think about the objects you are modelling as having ownership of their behaviors. When the language's grammar pushes back, it can reveal modeling mistakes earlier that might save you from a costly refactor later.

This is a small subset of the language, and I hope to write about more features in the future, but you get the idea of the ergonomics. Grammar is treated as a first class citizen as an enforcer of proper modelling, rather than being abstracted away behind more "programmey" words. My hope as the spec evolves is that more grammatical guardrails will emerge organically that will continue to push Wrela in a human readable and spec driven direction.

I deeply want Wrela to be a beautiful language, both to read and to write. If these ideas resonate, or if they rub you the wrong way, I’d genuinely love to hear from you so that it can be the best it can be.

*Wrela is experimental and evolving; syntax and semantics may change as I learn.*
