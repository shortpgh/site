---
layout: post
title:  "Solving an Issue with TinyMCE, Umbraco, and Empty P Tags"
date:   2014-01-25 15:19:00
blurb: Ever have issues with TinyMCE adding &amp;nbsp; to your empty tags? Here's how to solve that problem. 
tags: devtools, android
---

Do you use Umbraco to host a CMS? Do you have clients that copy and paste content from Word Documents? If you do, you probably ran into a problem the same problem as me. When the text gets copied and pasted from word, there end up being a lot of white space inserted between each line. In the default Umbraco setup, these new lines get inserted into your HTML as a bunch of empty P tags. This adds a lot of excessive white space and looks terrible. How is this problem solved?

My first idea was to strip this out on display time. It would be easy to do. But I really didn’t like the idea of adding extra processing to every page. I figured something was telling Umbraco and/or TinyMCE to insert those P tags and I wanted to know what it was. I could tell is that there was something happening after the page was saved. Figuring out what was doing this should help me fix it at that level instead of at display time.

I searched for articles about the TinyMCE configuration. My initial search results told me to enter in the force\_p\_newline config value to false. After that didn’t work, I stumbled upon [TinyMCE’s page on this value](http://www.tinymce.com/wiki.php/Configuration:force_p_newlines). It states that force\_p\_newline is a deprecated value. That explains why it didn’t work. I followed that page’s suggestion and looked into [forced\_root\_block](http://www.tinymce.com/wiki.php/Configuration:forced_root_block). I considered setting that to false, but the documentation suggests not to because it could cause other rendering problems. I didn’t want to do that and end up with unforeseen display issues after we shipped.

I started to dig into the TinyMCE documentation and stumbled upon the [valid\_elements](http://www.tinymce.com/wiki.php/Configuration:valid_elements#Default_rule_set) rules. I ignored this page initially because I didn't want to change the valid elements. This is actually the documentation that I was looking for. In addition to handling rules for element inclusion and exclusion, I learned that valid\_elements also handles empty tag display. In Umbraco’s default TinyMCE config -- Configs/tinyMceConfig.config -- I took a look to see what the P tag valid\_elements setting. It has a # in front of it, which “<blockquote>Enables padding of empty elements. This will pad with &nbsp; if they are empty. For example, "#p"</blockquote>”. I decided to change this to a + operator -- that leaves the element open but doesn’t add any padding. I used this in case we needed P tags with spaces in the future. You can use - to exclude P when empty if that is your preference. Check out [this page](http://www.tinymce.com/wiki.php/Configuration:valid_elements#Default_rule_set) for the rest of the options.

One final change needs to happen to my CSS before I’m through with this change. My P tags had a “padding-bottom: 10px” spacing on it to separate paragraphs. This meant that even with empty P tags, the spacing would still show. I changed this to a “margin-bottom: 10px” spacing. Now the empty paragraphs exist in the markup without taking up any space.

Searching around the Internet provided very little information on this topic. It took a long time for me to get to this simple solution. I hope this article helps someone doing the same searching in the future. Also worth noting is that this solution is valid for anyone that is using TinyMCE, not just Umbraco users.

