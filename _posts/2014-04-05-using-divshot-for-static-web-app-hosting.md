---
layout: post
title:  "Using Divshot for Static Web App Hosting"
date:   2014-04-05 22:20:00
blurb: Last week, I got an email from [Divshot](http://www.divshot.com/) announcing that they are officially going live. I’ve had an account for a few weeks now, so I figure now is a good time to write about this hosting service.
tags: static web apps
---

Last week, I got an email from [Divshot](http://www.divshot.com/) announcing that they are officially going live. I’ve had an account for a few weeks now, so I figure now is a good time to write about this hosting service.

Divshot has two services -- hosting for static web apps and a visual HTML builder. I’m focusing on the static web app hosting in this post because I haven’t tried the builder.

Overall, Divshot provides a great experience. It gives you a command-line tool (divshot-cli) to deploy your application. You can install the tool via npm and deploy your app a few minutes later. 
It’s as easy as type “divshot create” in your app directory followed by “divshot push production” to deploy it. A few minutes later, your code is live at <app-name>.divshot.io.

It is also a very [affordable service](http://www.divshot.com/pricing). It has a small free plan that will be useful for anyone testing out the service. Then it goes up from $4 to $100 monthly. Overall that’s not too bad. It’s not cheaper than setting up a cloud server on [Digital Ocean](https://www.digitalocean.com/). But there is no setup time or packages to install after creating an account.

As I said, I’ve used this service for a few weeks now, starting with the static showdown back in February. Since then, I’ve messed around with a few simple apps and integrated Divshot’s hosting with my development process. Here’s a quick overview of how I’ve used it.

#Local Development

The divshot-cli includes a local development server. This is very much like any of the [simple web servers](https://gist.github.com/willurd/5720255) that you might use when building a static app. I don’t know if this is similar to their production server in any way, but it does reduce another tool to include. It works nicely in my gulp file and hooks up with livereload much like I have with [connect](https://github.com/senchalabs/connect) in the past.

#Configuration

There isn’t much to configure, but it does offer a few things you’ll want to [check out](http://docs.divshot.com/guides/configuration). I use the “exclude” to keep out typically development cruft. Then I use “routes” and “clean_urls” so that I can use HTML5 History API and a [Backbone.js Router](http://backbonejs.org/#Router).

#Dev Server

Divshot offers a development server to accompany your production server. The command “divshot push” automatically pushes to the development server for your app. I typically test on this server after every few commits to make sure things are translating correctly. I setup a post-commit hook in git to automatically push to development after every commit. This way its easy for me to test sometime later.

#Production

Once I’m happy things are working, I’ll push to the production environment. I’ve found that if it works on dev, it will work on production too. There is also a staging environment, and a roolback process, but I haven’t used either to this point. In writing this, I realize I have not yet checked the performance stats on my app. I don’t know what kind of compession or caching it provides. I’ll update this post once I investigate.

#Best Redemption Process Ever.

One last final note of cred for Divshot. They offered credit to everyone that compete in the static showdown. To redeem, you had to run a command using their command line tool. That’s the first redemption code I ever completed through the command line.

Overall, I’m pretty happy with the Divshot hosting service. There is a lot more to the service than I covered here. I suggest anyone building static web apps at least check it out.

