---
layout: post
title:  "Are Static Web Apps Cost Effective?"
date:   2014-04-26 17:00:00
blurb: Building a static web app limits the amount of things that you have to maintain to build an app. But I’ve been wondering to myself -- Is this cost effective?
tags: static web apps
---

Building a static web app limits the amount of things that you have to maintain to build an app. There are no servers or databases to manage and no back-end code to create and maintain.  The companies whose APIs you use get to worry about all of that. It’s one of the benefits of building an app this style. But I’ve been wondering to myself -- Is this cost effective?

To figure this out, I’m looking at an estimated annual cost of a static web app first. In the data below, I list the highest price of each service that may use to build a static web app. These are all of services that I may or may not use for an app that I’m building.

* [GoInstant Mega](https://goinstant.com/pricing): $479/Month or $5,748/Year
* [UserApp User Management](https://www.userapp.io/#pricing): $199/Month or $2,388/Year
* [Divshot Hosting](http://www.divshot.com/pricing): $100/Month or $1,200/Year

All together, it will cost $9,336* per year for data storage, hosting, and user management. It comes out to less than $1,000 a month. That looks cheap. In fact, it is cheaper than some apartments that I used to rent. So how does this relate to building the same services from scratch?

I was going to do a cost breakdown for what it would cost to buy the servers, host them, and do all of the other stuff related to these apps. But I want to look at it a different way. What would it cost me, per year, to not have to manage databases, the APIs that connect to them, and the servers that host them. I want to be able to just worry about building the front-half of the app. How much would I have to pay someone to do this for me?

I think I’ll need at least one software engineer to build the APIs to connect me to the database, and one systems engineer to build and manage the servers. I used [salary.com](http://www.salary.com/) to get median salaries for both professions in the US.

* Software Engineer I: $60,000 / Year
* Systems Engineer I: $60,000 / Year

Added up, that is $120,000 per year for those two positions. Add an additional 20% (probably low) for employee benefits, and you are looking at $144,000 annually.

That’s a difference of $134,664 per year.

So to answer the question: Is a static web app cost effective? Yes.

Does it mean that all apps should be built following the static method? No.

Overall, If you have an app idea, a static web app is a great way to start. You can create a [working MVP quickly](http://shortpgh.com/2014/02/22/static-web-apps-are-for-startups/) and support it for minimal costs for several years. But if you want to be “the next Facebook”, you are going to need to build your own infrastructure at some point.

_* Please note that building and maintaining an app will cost more than the amounts listed on this page. This is not meant to be a final cost to support a static web app. There are additional costs that were left out. I left these costs out of the calculation because they are the same for either side of the argument._
