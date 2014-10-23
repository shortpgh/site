---
layout: post
title:  "How to use Polymer in a Chrome App"
date:   2014-10-22 22:23:00
blurb: I tried to use Polymer in a Chrome App and ran into a "Refused to execute inline script" error. This is how to solve that problem.
tags: chrome app, web components, polymer
---


I tried to include a Polymer element in a Chrome App for the first time and
quickly ran into this error:

    Refused to execute inline script because it violates the following Content
    Security Policy directive: "default-src 'self' chrome-extension-resource:".
    Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce
    ('nonce-...') is required to enable inline execution. Note also that
    'script-src' was not explicitly set, so 'default-src' is used as a fallback.
     
The Polymer components are a single .html file that are imported into your page.
This file includes the Javascript for that element inline in a script tag.
The [Chrome App Content Security Policy](https://developer.chrome.com/extensions/contentSecurityPolicy)
states that inline Javascript will never be loaded or executed. This is the
cause of the error above, as you will see if you click to view the source of the
error in DevTools.

The solution to this problem is to put what is in script tags into
regular tags. That's easy and usually already done in my app code. But it's a
little more difficult when the code is provided in another package as a single
.html file. Somehow the script tag in **each element** needs to be pulled out.

Luckily, the
[Vulcanize](https://www.polymer-project.org/articles/concatenating-web-components.html)
tool has a special --csp flag for just this case. When you run Vulcanize using
this method, everything inside of script tags is pulled into a separate .js
file. This makes it possible to make web components work with your Chrome Apps.

Of course, I didn't want to do this for every component that I wanted to use.
I can probably write a Gulp task that will do this for any web component I
download to my bower components, but I feel like that might be hard to maintain.
Before trying that, I just ran Vulcanize on my Chrome App .html file. Voila, it
worked. It took the file and pulled out the script tags for all of the
components included in my app. It was a very effortless process.

Here's the exact command that I use:
    
    vulcanize -o compiled.html app.html --csp

Here, Vulcanize runs on my app.html file and outputs it to compiled.html. In my
directory, there is also a new compiled.js file also included. I swapped the
reference for app.html with compiled.html and ran my app. Not only is the error
gone, but now my Polymer and Paper components are showing up.
