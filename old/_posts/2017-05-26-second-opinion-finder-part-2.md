---
title: "About Second Opinion Finder - Part 2 - Technologies"
date: 2017-05-26 12:31:00
category: post
tags: [nucodingcamp]
---

### Technologies
For this project, we didn't have much flexibility in determining what technologies to utilize. Our main goal was to build a data-focused application that included a backend server, utilizing a data persistance layer with full CRUD capabilities. Our team was pre-determined for us, so going into this we needed to establish tasks on day one as well as the project idea. I suggested the use of Github Project, which turned out well in my opinion. We were able to come up with the project idea and break down tasks for everyone to work on. 

We were required to utilized JavaScript, Node, NPM, Express.js, MySQL, and RESTful Routes. We had a choice of utilizing a Custom ORM or Sequelize. I pitched to my team that we should used Sequelize because establishing a custom ORM, based on homework experience, was a huge pain in the butt. Understanding it was one thing, applying it was a whole different level. We also had a choice of using Handlebars or HTML/CSS. We chose to go with Handlebars as it be fun to create dynamic website for each user. 

A added feature that we decided to implement, which I took lead on, was passport. It was a challenge to implement but the end result was rewarding. This did a couple things for us, the first thing is persisting user login, we were able to encrypt the user's passport and store that in MySQL, we were able to grab user specific data and show information just for that specific user that is logged in, which was super awesome.

Midway through the project, we had to impelement jQuery to utilize AJAX calls on the front end, and retrieving new information from the backend and updating the current page with new information. Initally, we used Handlebars and just pull information in on the first load. After a user submits information, the page doesn't refresh and implementing jQuery alleviated a lot of the issues we had with getting information to be displayed. 

Going back to "utilizing a data persistance layer with full CRUD capibilities". We knew for our app especially, if it become a real world application, we wouldn't want to delete data. The route we took for that was to allow administrators to "Delete" a user by completiting removing them from display. I had created a boolean column called `removed`. In handlebars, we checked to see if the user or doctor was removed or not. If they are, we would not display that user or doctor. If they weren't, we would display them.

Stay tuned for Part 3

-Andy