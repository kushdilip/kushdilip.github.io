+++
banner = ""
categories = []
date = "2016-01-20T09:48:44+05:30"
images = []
menu = ""
tags = []
title = "ember blog app example tutorial 1"

+++

I have been using [Ember.js](http://emberjs.com/) for approximately 18 months now. A lot has changed since I started learning it. Now things rarely break. There are plenty of [addons](http://emberobserver.com/) for whatever exciting stuff you want to do. 
There are articles, tutorials, podcasts, conference videos and local ember meetups everywhere. Small startups to big companies are using Ember to builds awesome apps. You will get Ember related content everywhere. I am not here to convince you why Ember is so awesome.
I am assuming that you are already convinced that Ember is cool and you'd like to give it a try. So my goal with this series is just to get you started smoothly with Ember. Along with tutorials We will learn some interesting tricks as well.
<!--more-->


In this series of posts, we will learn how to create a Ember.js based blog application with the help of [ember-cli](http://ember-cli.com/). This app is also a playground for me to test cool new stuff coming with latest versions of Ember.js, [Ember-Data](https://github.com/emberjs/data) & Ember-cli.

We will be using [ember-cli](http://ember-cli.com/) a lot here which is a command line utitiy developed by the same people who created Ember.js. It provides asset pipeline and enforces strong conventional project structure for our ember apps. You can read more here http://ember-cli.com/#overview


---
Let's begin..

##### Required packages.
First Ensure that below tools and packages are available on your system
1. [Node.js](https://nodejs.org/en/download/) (>= 0.12) & NPM 
2. [Bower](http://bower.io/#install-bower) : install using `npm install -g bower`
3. [ember-cli](http://ember-cli.com/) - install using `npm install -g ember-cli`

Follow http://www.ember-cli.com/#getting-started to install other dependencies.

##### 1. First step: Create app

Move to a directory where you want to create ember app and run below command.

```ember new ember-blog-example```

This commoand will scaffold the whole app with all necessary files and folders for you.
[Ember app directory](/images/post-images/ember-app-directory.png)

Now cd into directory `ember-blog-example` and type **`ember server`**, which will take few seconds to build and start the server. Server is provided by ember-cli for you.

[Ember server](/images/post-images/ember-server.png)

Open your broswer on and hit `localhost:4200` to see live app. It has some welcome content.

##### 2. Setting up Router & Routes
Ember app related all the files are present in `app` directory. Everything else is just to make your life easier as a developer.
At the root of `app` directory you will find a file called `router.js`. It extends `Ember.Router` and without even writing a single line of code, it provides you two routes. 
First `application` aka `root` aka `/`. And one child route of root called `index`. These are automatically created for you during build process and put in final builds files.
I will recommend installing a chrome plugin called [Ember Inspector](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi?hl=en) to explore the structure of the app as we develop.

We need to create route endpoints for all the different pages you want in your app. Here we need two main routes.

- 

1. **posts**  - here you can see the list of post in your blog app.
  To generate `posts` route, run **`ember generate resource posts`** in terminal. 
It adds adds endpoint in `routers.js`, route file `app/routes/posts.js`, model file 
`app/models/post.js`, template `app/templates/posts.hbs` and few test files. 
Don't bother about so many files we'll come to these later. 

2. **post**   - It's a dynamic route which shows you the data for each individual app. 
	Generate **post** route by running **`ember generate route posts/post`**.

Now `router.js` looks like

```js
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', { path: '/posts'}, function() {
    this.route('post', { path: '/:id'});
  });
});

export default Router;
```

- Here **`posts`** is a spceial type of route called resource and can have multiple child routes.  If `path` is not provided then fist paramter is taken as path by default.
- **`post`** is just a dynamic child route, where the actual path is `id` of each post.

So if you want to see all the posts, navigate to **`localhost:4200/posts`**.
For a post with id 1, navigate to **`localhost:4200/posts/1`**. See, so simple. We'll get data soon(there is no data right now).


#### 3. Show some data
We don't have any APIs right now so we will hardcode some data in the model hook of `routes/posts.js`(automatically created after by commands run in previous step).

**Route** is a class to define the individual resource/routes. There are many hooks predefined in Route class, out of which `model` hooks is most important one which you need to override to get some data for our app.

Our final `app/routes/posts.js` file will look like this
```js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params, transition) {
    return [
      {id: 1, title: 'Welcome to my blog', content: 'hello everyone, welcome to my blog'},
      {id: 2, title: 'A trip to remmeber', content: 'We went to a beautiful place this summer'}
    ];
  }
});
```

Now we will modify the `app/templates/posts.hbs` to render this data.
```html
<h2>Ember Blog Expample</h2>
<hr>
<h3>Posts</h3>
<ul>
  {{#each content as |post|}}
    <li>
      <strong>{{post.title}}</strong>
    </li>
  {{/each}}
</ul>
<hr>
{{outlet}}
```

`{{outlet}}` is portion where template for child routes gets rendered.

Ember has **Controller** class which provides data to the templates.  If you don't create corresponding controller for each route then a default one automatically created.
The data is automatically set by route to `model` property of, but we are using `content` here, which is just an alias for `model`. It's a just a matter of personal preference to use either.

Now open **`localhost:4200/posts`** to see the list of posts.

##### 4. Auto redirect to `posts` route
First create a file `index.js` in `app/routes` directory. Then modify `app/routes/index.js` file to automatically redirect the browser from `/` to `/posts`.

**`app/routes/index.js`**
```js
import Ember from 'ember';
export default Ember.Route.extend({
  redirect() {
    this.transitionTo('posts');
  }
});
```

#### 5. Transition to post route

Let's modify `posts.hbs` now. Instead of just showing the post title we will use `link-to` helper provided by ember. It will create links for individual post page.

```html
<strong>{{#link-to 'posts.post' post}}{{post.title}}{{/link-to}}</strong>
```

the first paramter to `link-to` is full path to the route from `router.js`.

Now if you click on any link, the url will change to **`localhost:4200/posts/{{whatever_id}}`**

#### 6. Show post data

Modify `app/routes/posts/post.hbs` to 
```html
<h3>{{content.title}}</h3><br>
<p>{{content.content}}</p>
```


#### 7. Fixing the refresh
 If you go to **`localhost:4200`** , it redirects to `/posts`. You get a list of post titles with link to dynamic route. Clicking on these links shows you contents of each post. We are passing the whole post object in these `link-to`.
Clicking on any post works fine. But if you're already on some post and try to do page refresh. See! the data is lost. What do we do now?
There is a solution for that as well. We will get our data from posts route directly.

Before solving this issue I will try to explain some important concepts.
The Ember.Route provides us a model hook which we are already using for posts route. but in post route we are not overriding any such model hook. So how does it get post data automatically.
Route class has one more hook called `setupController`. the default implementation  provided by Ember is as below.
```js
setupController(controller, context, transition) {
    if (controller && (context !== undefined)) {
      set(controller, 'model', context);
    }
}
```

this hook is called automatically after model hook returns data and sets it to a `model` property of of corresponding controller.

if you want to override this hook without any modifcation, it will look like this

```js
setupController(controller, model){
  this._super(...arguments);
}
```


We learnt about three of route hooks. `model`, `setupController` and `redirect`.

Now the interesting thing to know here is that everytime you land on some page, the model hook will not be called always but setupcontroller will be always called first. 
There are two ways to reach any page on our blog app. First is if you were already on some other page say posts and click on the any post link. Technically speaking our Ember app was already instantiated. and you merely navigated to other route. 

In our case the code looks like this
```html
{{#link-to 'posts.post' post}}{{post.title}}{{/link-to}}
```

if you see the corresponding route in router.js
```js
this.route('post', { path: '/:id'});
```
which expects an id (a number or string). But in our link-to we are passing the whole object.
In this case, Ember knows that you already have data and tries to match dynamic url parameter `:id` to `id` from post object. Because of this assumption it skips the model hook and directly calls the `setupController` on post route.

Other way to reach at post route is directly through url or refreshing on any post.
So let's say we refresh on route `localhost:4200/posts/1`. We will hit `model` hook first which is not implemented yet so `setupController` will be called with null data.

Now let's solve this problem by implementing model hook. Add below lines to your post route

**`app/routes/posts/post.js`**
```js
model(params, transition){
	let posts = this.modelFor('posts');
	let id = +params.id;
    let [post] = posts.filterBy('id', id);
	return post;
}
```

Now you will be able to see data on refreshing **`localhost:4200/posts/1`**.

You can also try out putting just id in link-to
`{{#link-to 'posts.post' post.id}}{{post.title}}{{/link-to}}`

Now the model hook of post route will hit first, no matter how you reach this page.


Screenshots from the app I am running locally

[Screenshot 1](/images/post-images/ember-blog-posts.png)

[Screenshot 1](/images/post-images/ember-blog-posts-2.png)


---
In this part we learn about very basics of Ember router, routes, controllers and 
some interesting things which people come across after months of using Ember.js


##### Source code
As we go through this tutorial I will keep pushing code on this [repo](https://github.com/kushdilip/ember-blog-example).

I will also create version tags after each part of this series.
First version is available here [v0.1.0](https://github.com/kushdilip/ember-blog-example/releases/tag/0.1.0)
