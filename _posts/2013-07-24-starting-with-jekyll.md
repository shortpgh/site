---
layout: post
title:  "Starting with Jekyll"
date:   2013-07-24 22:12:48
categories: article
---

# Getting started with Jekyll

Now that I have a basic site, the next step is to make it more advanced. I want
to use Jekyll to do that.

## Jekyll New

I started with the running jekyll new to get started. Because there are already
some files here, I shad to force it to run in the directory. This overwrites my
already created files.

    jekyll new --force

Then so that I can test my changes locally, I started the built-in Jekyll
server.

    jekyll serve --watch

with that up, i was able to see my site at http://localhost:4000/.

## Configuring Jekyll

The first step is to setup the _config.yml file to configure Jekyll.

I left the default markdown configuration to redcarpet. I also named the site.
Here is the starting config file:

    name: ShortPgh
    markdown: redcarpet
    safe: true
    lsi: false
    pygments: true

## initial folder setup

* /_posts  - intial place for the blog posts.
* /_site   - where jekyll saves the site.
* /_layout - layout html files.

Jekyll has a few other directories that it suggests. You can read more
[http://jekyllrb.com/docs/structure/](here).

## creating posts

[Jekyll documentation](http://jekyllrb.com/docs/posts/) says that posts need to
have this format:

    YEAR-MONTH-DAY-title.MARKUP
    YEAR-MONTH-DAY-title.md

I prefer the .md extension, so that's what I'm using for my files. I have a few
posts written already -- including this one -- but don't have them in the
correct format. So I moved all of them to the _post directory and gave them
appropriate file names. 

The other thing that I have to do is give my posts the proper [front
matter](http://jekyllrb.com/docs/frontmatter/]. I used the front matter from the
provided post as a starting point.

    ---
    layout: post
    title:  "Starting with Jekyll"
    date:   2013-07-24 22:12:48
    categories: article
    ---

After moving and adding the front matter, both articles showed up on my home
page. With a simple push to github, they all apear on the page.

## workflow

To this point, I haven't done very much checking my styling or editing my posts.
While I already p
