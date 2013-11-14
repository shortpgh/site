---
layout: post
title:  "A Tip to Help Improve Your Javascript Code's Usability"
date:   2013-11-13 22:47:00
blurb: The usability of your javascript -- or any code -- is as important as the usability of what you are building. When you write code, you want it to be used.  Heres what I do.
tags: javascript, usable code
---

The usability of your javascript -- or any code -- is as important as the
usability of what you are building. When you write code, you want it to be used.
And it will be used, either by your future self or by another developer. Usable
code is easier and better. It’s important if you are shipping coded for others
to use, open sourcing a library, and if you have to maintain it in the future.

Think about it. Would you use Jquery's ajax if it wasn't easy? Or, put it this
way, would you use Jquery's Ajax if vanilla javascript's Ajax was as easy?
Probably not. The Jquery team wouldn't have written their Ajax method if vanilla
javascript's was easy. 

But how do you make your code usable? This can be hard to do. Usually, you have
much better ideas when looking back at your code. How often do you go back to
old code and think "this could be so much better if I...". How do you get these
ideas when you built it? And how do you know it's usable? There are plenty of
theories out there, but do they apply to you?

Heres what I do. I write a tutorial explaining how to use the code. Its a great
exercise to help make your code usable. Pretend you are shipping your code to
someone and have to tell them how to use it. It makes you think about how it
should be used. You see ways you can improve your usability when looking through
other people's eyes.

Writing a tutorial for code getting shipped to another developer is actually how
I started doing this practice. This helped me when describing something as
simple as an element show/hide toggle. My implementation toggled a class of
“toggle-hidden” on the element. In my tutorial, I wrote that to hide the element
by default, you had to put a class of “toggle-hidden” on the element. I realized
a usability mistake as soon as I wrote that line. The toggleable elements are
hidden by default in the implementation. Having to do extra work to set the most
common behavoir is an unnecessary step. I modified the code to toggle a
“toggle-expanded” class. This is left off by default and the element is hidden.
Then I changed my tutorial to say that you could make the toggleable element
visible by default by putting a class of “toggle-expanded” on it. 

I usually do my tutorials a day or so after implementing the code. This works
best for me.  I’m less attached to my code so I don’t try to defend my
decisions. It also gives me time to let all the small details get out of my
brain. I'm forced to re-read the code to remember those details. Typically, I
see things that I didn't see while writing the code.

If you don’t ship code to others, you should still take this step. It's easy to
do - you don't need anything special.  Write it in a comment block at the top of
the file that contains the code or above where it's defined. This makes it easy
to see how it works with the code there for reference. And it makes it easy to
find the tutorial when looking back at how your code. I think a tutorial is a
better code level comment than the typical boring documentation I otherwise
write. 

This technique works for more than just Javascript. It’s just the language I was
working on when I decided to write this. It works for any code you are writing,
from a new PHP function to a C# class to a NodeJS command line script. It even
works for your OOCSS styles. Really, writing documentation for what you build is
a great way to improve your usability of anything -- not just for code. Maybe
you could even be doing this before you build your code?
