---
layout: post
title:  "Chrome DevTools is a Web Developers Best Tool"
date:   2014-01-11 16:47:00
blurb: Chrome's DevTools is one of my favorite development tools. It is one of the best - if not the best - tools available to web developers. I provide some reasons why I believe this.
tags: devtools
---

Chrome's [DevTools](https://developers.google.com/chrome-developer-tools/) is one of my favorite development tools. It is one of the best - if not the best - tools available to web developers. It makes you more productive. It also lets you perform numerous developer functions in the same platform that you are building for -- a browser. There aren’t many development platforms that have tools at this level.

It truly does make you more productive. At least more productive than a developer in the early 2000s. If you don’t believe me, take a look at this image below. This is the DevTools equivalent before 2004.

<iframe src="https://www.flickr.com/photos/atxryan/4645467027/player/4af4ea5e75" height="316" width="461"  frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

That type of message, along with a lot of alert() calls, was how I used to debug JavaScript bugs back in the days before Chrome and Firefox. That’s when IE6 was the most popular browser. This was not a very productive way to debug code. With Chrome and DevTools we get detailed errors messages and a link to the javascript code. Inside the editor, the error is highlighted. I can even throw in a few breakpoints for debugging. When I change the code, the browser automatically reloads it and I can continue testing without doing a refresh.

It improves CSS productivity as well. You can right click on any element on a page to inspect it. This shows you all of the styles that are affecting the display of the element. Changes you make will be saved to your CSS file if you setup your environment up to do so. This wasn't possible before 2004. I don’t remember what it was like trying to write CSS before element inspectors were released - I’m glad I’ve erased that from my mind.

If you're familiar with Firebug, you might be wondering what the big deal is. Everything I just described is available in Firebug. A lot of the basic things that devtools does was started by Firebug.

Where devtools really shines is the additional functionality it offers developers. You can profile your website, emulate different devices, and get a complete DevTools experience on your device.

The profiling functionality is a must for any developer that is worried about performance. You can see how long it takes your sites resources to load so that you can detect bottlenecks. Adding in the [PageSpeed Insights extension](https://chrome.google.com/webstore/detail/pagespeed-insights-by-goo/gplegfbjlmmehdoakndmohflojccocli?hl=en) gives you the ability to profile page loading and get improvement suggestions. PageSpeed even gives you optimized images and code to include in your production site right in your browser. The other profiling and auditing tabs help you take this even further to help you improve the performance of sites as users interact with your site.

Device testing is another strong point of DevTools. Until recently, you use to have to resize your browser to test different viewport sizes. With [DevTools Device Emulation](https://developers.google.com/chrome-developer-tools/docs/mobile-emulation), you get a great way to test different devices, simulate touch events, and modify user agents. Pull that up next to your phone and you'll see that this is an accurate emulation.

If you have an Android device, you can plug it in and [remote debug your device](https://developers.google.com/chrome-developer-tools/docs/remote-debugging) in the same DevTools that you use on your desktop. It even provides screencasting so you can interact with your device right on your desktop. This is an amazing tool for debugging issues on non-desktop devices.

This isnt the entire list of things you can do, but using these parts is a great start to improving your productivity. I don't think you can find an editor or other tool that offers all of this to you in the same package. That is what makes it such an incredible tool. If you work in the web and aren't using it daily, you should start to do so. All of these options can be overwhelming if they are new to you. The best way to pick this up is to start watching the videos of people using it - there are plenty on [YouTube](https://www.google.com/search?q=YouTube+DevTools&oq=YouTube+DevTools&aqs=chrome..69i57j0j69i64.3943j0j4&sourceid=chrome&espv=210&es_sm=91&ie=UTF-8). Then follow the [Chrome blog](http://blog.chromium.org/) to keep up to date on new developments to both DevTools and Chrome. You'll be a happier developer once you learn to incorporate DevTools in your daily process.
