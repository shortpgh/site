---
layout: post
title:  "Autoload Your Grunt Modules"
date:   2014-02-08 18:10:00
blurb: This is a quick tip for anyone using grunt in their workflow.
tags: web speech api
---

This is a quick tip for anyone using grunt. Use load-grunt-tasks to make loading new commands easier. It removes the need to add the load command for each task you install.

I usually add this command to the top of my gruntfile.js before the initConfig task.

require('load-grunt-tasks')(grunt);

Here is the command to install it:

npm install --save-dev load-grunt-tasks

If you aren't familiar with --save-dev, you can use this to automatically add the package to your package.json while installing it locally. It puts it under devDependencies in the package.json.

