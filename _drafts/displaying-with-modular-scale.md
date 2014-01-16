# configuring the display

with the jekyll system working, i want to make the site look nice before pushing
it live. I've been reading and listening a lot about modular scale. There is a
great Compass and Sass plugin for working with this. My first step is to set
that up. Luckily, it is all pretty easy to install -- you can follow these links
if you need to do so.

[compass](http://compass-style.org/install/)
[modular scale](https://github.com/Team-Sass/modular-scale)
[css_parser]() I installed this as mentioned in [this
site](http://thesassway.com/beginner/getting-started-with-sass-and-compass).

If you are new to sass, or haven't heard about it yet, I suggest checking out
[team-sass](https://github.com/Team-Sass/) for some great SASS and Compass
resources.

With everything setup, the first thing to do is initialize SASS for my project.

    compass create .
    compass watch

This sets up all of the basic files and configuration. The watch command keeps
watch on the files while I'm changing them.

