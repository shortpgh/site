---
layout: post
title: Favorite Javascript Object
date:   2014-05-16 17:00:00
blurb:
tags: development
---

Functional object.
The functional object is my favorite JavaScript object because:

* You don't have to use new.
* You don't have to use this.
* It has private variables.
* It works with node-style requires.
* It supports inheritance.
* It can be extended by adding parts.

Here is a basic functional object.

<code class="highlight">
<pre>
  var obj = function(spec, my) {
    var my = my || {};
    var that = {};
    return that;
  };
</pre>
</code>

You call the function to create the object, no “new” needed.

<code class="highlight">
<pre>
	var x = obj();
</pre>
</code>

You can inherit it when creating a new object.

<code class="highlight">
<pre>
var router = function(spec, my) {
    var my = my || {};
    var that = obj(spec, my);
    my.routes = [];
    that.go = function() {
      // ...
    };
    that.addRoute = function(path, func) {
      // ...
    };
    return that;
}
</pre>
</code>

Check it out, trying to acces my doesn’t work.

You can add new functionality by using parts.

<code class="highlight">
<pre>
  var x = function(that) {
    that.do_something = function() {
      // ...
    };
    return that;
  }
</pre>
</code>

Then:

<code class="highlight">
<pre>
	var r = router();
	x(r);
	r.do_something();
</pre>
</code>

You can export the object definition.

<code class="highlight">
<pre>
	module.export = {
		obj: obj,
		router: router
  }
</pre>
</code>

If you look back through these examples, you’ll notice that I don’t use “this” anywhere. That’s one of my goals when writing javascript.
