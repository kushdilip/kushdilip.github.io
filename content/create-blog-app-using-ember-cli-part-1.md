+++
date = "1970-01-01T05:30:00+05:30"
draft = true
title = "Guide to Build Ember.js Blog App using Ember CLI - Part 1"
slug = "create-blog-app-using-ember-cli-part-1"
aliases = [
	"create-blog-app-using-ember-cli-part-1"
]
+++
[Ember.js](http://emberjs.com/) core developers are working with full speed to release v2.0. The development is going so fast that it is difficult to follow the latest stuff. It becomes even more difficult if you are already working on a production app.
In this series of posts, we will learn how to create a Ember.js based blog application with the help of Ember-cli. This app is a playground for me to test latest versions of Ember.js, Ember-Data & Ember-cli. Ember.js has steep learning curve, so these posts will also help people who are new to Ember. We will gradually create the complete working app. Development will go through below steps.

>- Create blog app with hardcoded data.
- Pull data from Fixture Adapter and use it in app.
- Use ember-cli-mirage emulating REST API for us. It uses Pretender internally. 
- With ember-cli-mirage and ember-qunit we will learn a bit unit testing in ember.
- Learn extending Adapters & Serializer for Firebase Adapters.

I will host the source code and working app on github pages. I will also create release version as we accomplise each of above milestones.

######Let's Begin

First Ensure that below stuff are available on your system
1. Node.js (>0.10.33) & NPM(>2.10)
2. Bower : install using `npm install -g bower`
3. ember-cli - install using `npm install -g ember-cli`

Follow http://www.ember-cli.com/#getting-started to install other dependencies.

**Create a new Project**<br>
`$ ember new ember-blog`<br>
this will create a `ember-blog` folder and generate application structure.

To launch the app
```
$ cd ember-blog<br>
$ ember server
```
navigate to http://localhost:4200 to see your new app 
navigate to http://localhost:4200/tests to see your tests.

Now create a repository on github.com and push the folder to it. 

#####Defining Routes
When your application starts, the router is responsible for displaying templates, loading data, and otherwise setting up application state. It does so by matching the current URL to the routes that you've defined.

open the `ember-blog/app/router.js` file where you can see empty `Router.map`. Modify it as below

```
Route.map(function(){
	this.resource('posts', { path: '/posts'}, function(){
    	this.resource('post', { path: '/:id' }, fuction(){
        	this.route('edit', {path: '/new' });
        });
        this.route('new', {path: '/new'});
    }):
```