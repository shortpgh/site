---
layout: post
title:  "Web Speech API in HTML5 is Easy"
date:   2014-02-01 22:36:00
blurb: The Web Speech API gives you the capability for both text-to-speech and speech-to-text in your web sites and applications. And it's easy to work with.
tags: web speech api
---

Chrome 33 (currently in beta) is [shipping with](http://blog.chromium.org/2014/01/chrome-33-beta-custom-elements-web.html) [HTML5 Web Speech API](http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API). If you are unfamiliar with the Web Speech API, it adds in the capability for both text-to-speech and speech-to-text in your browser. This is a surprisingly simple to work with. I say surprising because it doesn’t seem like it should be this simple to do these things in your browser.

Before you get too excited about using this technology, be aware that support is disjointed. The text-to-speech is only fully available in Chrome 33, but some speech-to-text capabilities do exist as early as Chrome 25.. Safari 7 on IOS7 has limited support -- I don’t own an IOS7 device so I could not test which is available. caniuse.com doesn’t have an entry for the Web Speech API, so that means that most other browsers probably don’t support it. If you want to test this out Today, you can do so using [Chrome Canary](https://www.google.com/intl/en/chrome/browser/canary.html).

Now that we’re through availability, lets me show you how easy Web Speech is to use. Let’s start by making the browser talk to you. Open up your javascript console and copy and paste this line of code (or hit <input type="button" value="this button" onclick="window.speechSynthesis.speak(new SpeechSynthesisUtterance('Hello World'));">):

<code class="highlight">
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('Hello World'));
</code>

If you are using a capable browser, you should have heard your computer say Hello World. Neat, right? There is more you can do with this API, including changing the voice, that I’m not going to get into. Read [this post](http://updates.html5rocks.com/2014/01/Web-apps-that-talk---Introduction-to-the-Speech-Synthesis-API) by Eric Bidelman if you want to see some more of those options.

Next up is accepting your your speech as input. Add x-webkit-speech to your input textbox attribute like so:

    <input type="text" x-webkit-speech>

<input type="text" style="width:70%" x-webkit-speech>

This lets you hit a little microphone when you are focused on the textbox. You should see that in the example above.

This is the easy way to accept text-to-speech in your forms. You can collect speech input in Javascript as well. That gets a little more complicated, so I’m not going to talk about that Today. If you are interested in learning how that works, I suggest you check out [this article](http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API) by Glen Shires.

Now you you’ve seen how easy this is, go check out [this sweet Web Speech demo](http://www.moreawesomeweb.com/demos/speech_translate.html) by Eric Bidelman. He combines the Web Speech API with the Google Translate API. I keep going back to this page to play with it. I’m amazed that this is capable in the browser.

I have one negative thing to report. At the moment, the speech-to-text is not as accurate as I’m used to with speech-to-text services. It only captured around 60% of my words correctly. I tested it on both my Macbook and Nexus 5. I don’t believe it was a microphone issue -- Google Now rarely has issues when I use it.

Be sure to check out the official Web Speech API spec for more information. Let me know if you build something awesome with this API.
