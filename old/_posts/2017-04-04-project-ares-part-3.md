---
title: "About Project Ares - Part 3 - User Auth"
date: 2017-04-04 14:00:00
category: post
tags: [nucodingcamp]
--- 

### User Auth
My focus point was on user authentication. We utilized a library called [FirebaseUI-Web](https://github.com/firebase/firebaseui-web). The tricky part about utilizing the library is, it required a redirect page. Our initial intention was to do a one page app and most of our user auth issues stemmed from it being a one page app. Everytime a user would login, the page would immedialy kick them back to the login page. Initially, after logging in the intended purpose was to hide the login-container and unhide the user-container. We used `.addClass("invisible")` and `.removeClass("invisible")`. Sometimes it worked fine and sometimes it didn't. 

I relooked at the code and it seemed simpled enough to understand. The one thing that still boggles me to this day is figuring out how the `queryParameterForSignInSuccessUrl` works. I thought based on the documentation it allowed the `signInSuccessUrl` to be bypassed. I was wrong because I couldn't get it to work and I clearly did not understand the documentation!

I knew something else could be done and I went ahead and put me focus on learning the documentation a bit better. I found out that in order to resolve the login issue, I ended up splitting the login process on `index.html` and the app itself on `landing.html`. Surprisingly enough, it resolved all the issues we had with logging in. 

The great thing about user authentication is that I was super happy when I was tracking the users name. I mean come on.. that has to be pretty cool right???? Anyhow, it took me too long to find a solution and if I had to go back and redo this project I would focus on a different task and set the login to the side. All in all, a good learning experience.


-Andy