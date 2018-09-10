---
title: "Step by Step Guide for Heroku Deployment using JawsDB MySQL "
date: 2017-05-09 12:00:00
category: post
tags: [nucodingcamp]
---

This post will just be about deploying to Heroku with JawsDB, a fully functional MySQL Database add-on. Before you do anything, make sure you have created a heroku connection by typing in `heroku create` in your terminal for the app you want to deploy.

Another note before continuing, you will be required to input your Credit Card information on Heroku before being able to add a free provision of the JawsDB MySQL. This is because [Heroku](https://devcenter.heroku.com/articles/account-verification) "needs to be able to identify and contact the userbase in the event of an issue and it also helps with abuse prevention".

The first thing you'll want to do is to navigate to your `Heroku Dashboard` and click on the `application` you want to apply the JawsDB MySQL add-on to.
![Heroku Dashboard](https://cloud.githubusercontent.com/assets/8935847/25835825/9a289f84-3447-11e7-8803-93eca338d8fc.PNG)

You'll then want to click on `Configure Add-ons`
![Add-ons](https://cloud.githubusercontent.com/assets/8935847/25856324/458bb34a-349b-11e7-9126-4cb27e4d6738.PNG)

It will take you to the `Resources` tab and where it says `Add-ons`. Type in `JawsDB MySQL` and click on it. You should see this popup right after.
![Popup](https://cloud.githubusercontent.com/assets/8935847/25835888/16916a6a-3448-11e7-8c26-80f041fa0027.PNG)

Keep the plan name as `Kitefin Shared- Free` and click on `Provision`.

If you have done this correctly, you should see `JawsDB MySQL` appear under your add-on for your app
![Jaws](https://cloud.githubusercontent.com/assets/8935847/25835942/597ceaa2-3448-11e7-9a26-d3c35fe9698d.PNG)

Once the add-on has been added. Go ahead and click on `JawsDB MySQL`. You should see the `Connection Info`, `Server Status`, `Legacy Databites` and `Miscellaneous`.

At this point, you'll want to open up `MySQL Workbench` and add a new MySQL `Connection`. You should see the below screen.
![MySQL](https://cloud.githubusercontent.com/assets/8935847/25854294/22746ca4-3495-11e7-96aa-ff8c8ddec5cc.PNG)
![Jaws](https://cloud.githubusercontent.com/assets/8935847/25854500/cfcbb510-3495-11e7-88a0-8d0dde7c7ea0.PNG)
You will want to add the information from your `JawsDB` Connection Info screen to the MySQL Connection. Your connection name be what you want to call it e.g. `heroku burger db`. The hostname will be the full link that ends with `amazonaws.com`. Port stays the same, username and password should be pretty straightforward.

Once connected on workbench, you should see a random DB name that it generates for you. Please see screenshot below.

![DB Name](https://cloud.githubusercontent.com/assets/8935847/25854639/4b0b4cd6-3496-11e7-85f4-98f59fbcb8f4.PNG)

We have seen this before. It should be pretty straight forward. The DB name is already taken care of us, so you want to type in `USE ai3z7jm8sha58vwr;` and once MySQL Accepts the query. You'll then want to create the table name e.g. `burgers` and the appropriate columns. As well as, inserting information into the columns.

Once you have completed creating the table and are able to view the content of information you added to the table. You can close MySQL. The next step is to navigate to your `connection.js` file. You will want to use the below code block.
{% highlight ruby linenos %}
var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: "",
        database: "db_name",
    });
};
{% endhighlight %}
The above connection will allow Heroku to input what your environment's JAWSDB url is. You won't have to worry about inputting any url or credentials. Go ahead and save your `connection.js` file.

Navigate to your `server.js` file and for the PORT variable you'll want to make sure you have `var PORT = process.env.PORT || 3000;`. Having `process.env.PORT` allows the port to be inserted dynamically when hosting your application on another service e.g. `Heroku`

Once everything is all set and done, you should be ready to deploy to Heroku. Go ahead and do the standard stuff. Your app should be up and running! Feel free to reach out to me if you have trouble deploying. Just an FYI, this information will be need to be changed if deploying with sequelize, slightly different.

Thanks for reading! Feel free to let me know if I miss anything as well.

-Andy