---
layout: post
title:  "How to Launch Chrome Apps via Command Line"
date:   2014-10-24 22:11:00
blurb: This is how I launch Chrome Apps I'm developing using the command line in OSX.
tags: chrome app, web components, polymer
---

This is the command I use to launch my Chrome App using the command line on OSX.

    Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --load-and-launch-app=/Users/nmihalick/Projects/app_name

I tried using the open command, but that wouldn't seem to do it. I'm not sure
why, but assume it's probably because I did something wrong. This works, so I
didn't look into it.

I also found that using ~ for my home directory also didn't work. Again, I
didn't investigate because I found something that works.
