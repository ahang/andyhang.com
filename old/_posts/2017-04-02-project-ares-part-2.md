---
title: "About Project Ares - Part 2 - Technologies"
date: 2017-04-02 15:31:00
category: post
tags: [nucodingcamp]
--- 

### Technologies & Trouble on the Horizon
Prior to starting on the project, we had to figure out what API's we can utilized. Initially, the first two API's we found [The Movie DB API](https://www.themoviedb.org/documentation/api) and [Flix Roulette API](http://netflixroulette.net/api/). 

From The Movie DB API, we used the search parameter to discover a random movie based on the genre the user selected and ensured it also included an imdb rating of 6 or higher. We used the URL, `https://api.themoviedb.org/3/discover/movie?` based on the API documentation and changed the url to for our purposes. Within the url parameterrs, we used `sort_by=popularity.desc` and since it gave us back results of over 100 pages, we decided to set the specific page to a random number by creating a function that gave us one random number between 1-1000. From that page, we were able to choose one title out of the entire JSON list from the page.

Once a title has been chosen, we pass it through the Flix Roulette API. Here is where our trouble started stemming from. I found out that Netflix was no longer providing API access to any users and Flix Roulette API was one of the few exceptions to that. The main problem was Flix Roulette only contained data from 2014 and before. Any new additions to Netflix since won't be parseable.

We had to locate a better API. We looked through the marketplace and mashape and came across our third API, Unofficial Netflix Online Global Search ([uNoGS](https://market.mashape.com/unogs/unogs)). The only drawback on the uNoGS was that it was a fremium API. During the testing period, we had to tread carefully as to next exceed our free queries.

We took the title from The Movie DB API and passed it into uNoGS. If the title wasn't a valid Netflix title, it will prompt the user to click on one of the genre buttons again to get a new title. Once we were able to get results from the API. We parsed the information and append the title, the picture of the movie, the brief plot of the movie and added a data-attr of the Netflix ID to the page. We also appened a Netflix button to the page as well. When the user clicks on it, it will redirect them to the Netflix page of the movie. We also added two buttons that allow the user to like and dislike the movie.

-Andy