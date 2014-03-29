---
layout: post
title:  "The Architecture of a Static Web App"
date:   2014-03-29 11:40:00
blurb: Static web apps have an interesting architecture. The app is front-end based and uses 3rd party services instead of having it own server component. The architecture sounds simple -- you just need to build a UI. But the separation can make things complex because you have to mash up different services. This is my attempt to identify the architecture. I also want to outline it so I can see how this can work for a non-static web app.
tags: static web apps
---

Static web apps have an interesting architecture. The app is front-end based and uses 3rd party services instead of having it own server component. The architecture sounds simple -- you just need to build a UI. But the separation can make things complex because you have to mash up different services. This is my attempt to identify the architecture. I also want to outline it so I can see how this can work for a non-static web app.

<img src="https://docs.google.com/drawings/d/1aKk8R3c6M3FudhqCRihPrHVbab_LLi4HBbfCKQN4ytA/pub?w=853&amp;h=422">

#Separation of App and APIs

The first thing you’ll notice is the separation of the app and the services that it uses. This is the defining piece of a static web app. It essentially acts as a client-server model, except the client can be connected to multiple servers. In this pattern, the code is completely separate. Another way to look at it is that the static web app acts as a customer to the API. As long as the API delivers on its promise, the static web app will be a happy (and working) customer.

#The App Artchitecture

The app of the static web app contains a display layer, the engine layer, and the API libraries. You can also look at these layers as views, controllers, and models respectively.

##View Layer

This is what your users see and interact with. Its what the app code uses to display the data to the user. Its primarily HTML and CSS. Javascript will be used for managing interaction, getting data, and routing. There are a lot of frameworks that support this type of architecture.

##The Engine

This is the Javascript code that drives your static web app. It manages state, handles events, triggers view changes, and manipulates data. It also glues the app to the 3rd party services that the app is using. I call this the engine because it does more than a typical controllers. It can actually be made up of controllers and models, or any other front-end pattern of your choice. Your code will probably be made up of multiple modules and may or may not make use of a framework. If you choose a framework, you code may be more or less tied to the view layer.

##3rd Party APIs

This is typically javascript code that is provided by your 3rd party services. It handles communication with services. It can connect apps to databases, data manipulation tools, map tools, or anything else that the client code needs to offload to a server. You’ll typically wrap this code in your engine code.

#Services

The services are the back-end services that provide different functionality. They offer data storage, user management, location tools, mapping, and other advanced functionality. You’ll also want to use services for anything that is too heavy for your front-end services -- like image manipulation.

Using services can provide a lot of benefits to app developers. You don’t have to worry about managing redundancy, availability, backups, and a lot of other things back-end services require. Of course, that can be a disadvantage because you are now at the mercy of the service providers.

If you build services, your code should be provided to make it easy for app developers to use. Following existing standards is also important because it makes it easier to combine your service with other services.

#Conclusion

Studying this structure shows a useful pattern for building any kind of app -- not just the static kind. Think about how you can use this pieces on your web app? I’ll cover the back-end architecture more in my next piece.
