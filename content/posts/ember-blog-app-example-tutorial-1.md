+++
draft = true
banner = ""
categories = []
date = "2016-01-20T09:48:44+05:30"
images = []
menu = ""
tags = []
title = "ember blog app example tutorial 1"

+++

I have been using Ember.js for approximately 18 months now. A lot has changed since I started learning it. Now things rarely break. There are plenty of Addons for whatever exciting you want to do. There are articles, tutorials, podcasts, conference videos and local meetups everywhere. Small startups to big companies are using it to builds awesome apps. You will get lot of content of everywhere to convince why Ember.js is so awesome. 
I am supposing that you're already convinced that Ember is cool and want to give it a try. So goal with this series is just to get you started smoothly with Ember. Along with tutorials I will tell you some interesting things I discovered all along.
<!--more-->


In this series of posts, we will learn how to create a Ember.js based blog application with the help of Ember-cli. This app is also a playground for me to test cool new stuff coming with latest versions of Ember.js, Ember-Data & Ember-cli. I still feel that Ember has steep learning curve, so these posts will also help people who are new to Ember. 

We will be using ember-cli a lot here which is a command line utitiy developed by same people who created Ember.js. It provides asset pipeline and enforces strong conventional project structure for our apps. You can read more here http://ember-cli.com/#overview


Let's begin..

##### Required packages.
First Ensure that below tools and packages are available on your machine
1. Node.js (>= 0.12) & NPM 2.0
2. Bower : install using `npm install -g bower`
3. ember-cli - install using `npm install -g ember-cli`

Follow http://www.ember-cli.com/#getting-started to install other dependencies.

##### Create app

Move to a directory where you want to create ember app. and run below command.

```ember new ember-blog-example```

Now we have the whole app ready with everything we need. cd into directory `ember-blog-example` and type `ember server` which will take few seconds to build and start the server. Server is provided by ember-cli for you. 

Open your broswer on and hit `localhost:4200` to see live app. It has some welcome content for you.

##### Setting up Router & Routes
Ember app related all the files is present in `app` directory. Everything else is just to make your life easier as developer.
At the root of `app` directory you find a file called `router.js`. It extends `Ember.Router` and without even writing a single provides you two routes named `application` aka `root` aka `/`. And one child route of root called `index`. These are automatically created for you during build process and put in final builds files.

I will recommend installing a chrome plugin called [Ember Inspector](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi?hl=en) to explore the structure of the app as we develop it.

We need to create route endpoints for all the different pages you want in your app. Here we need two main routes.
- posts - here you can see the list of post in your blog app.
- post - It's a dynamic route which shows you the data for each individual app. 

To generate `posts` run `ember generate resource posts` in terminal. It adds adds endpoint in `routers.js`, route file `app/routes/posts.js`, model file `app/models/post.js`, template `app/templates/posts.hbs` and few test files. 
Don't bother about so many files we'll come to them one by one. 

Now generate post route by running `ember generate route posts/post`.

We will further modify `router.js` as below

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

Here `posts` is a spceial type of route called resource and can have multiple child routes. `post` is just a route but a dynamic one where the actual path is `id` of each the post. if `path` is not provided then fist paramter is taken as path by default. 

So if you want to see all the posts you'll navigate to `localhost:4200/posts`.
For a post with id 1, navigate to `localhost:4200/posts/1`. See, so simple. We'll get data soon.

[Screenshot of directory structure]


#### Show some data
We don't have any APIs right now so we'll hardcode some data in  model hook of `routes/posts.js`.

Route is class provide by Ember to provide data for your templates. There are many hooks predefined in Route class, out of which `model` hooks is most important one which you need to override.

Our final `routes/posts.js` file will look like this
```js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params, transition) {
    return [
      {id: 1, title: 'Welcome to my blog', content: 'hello everyone, welcome to my blog'},
      {id: 2, title: 'A trip to remmeber', content: 'We went to a beautiful place this summar'}
    ];
  }
});
```

Now we will modify the `templates/posts.hbs` to render this data.
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

The data is automatically set by route to controller as its `model` property,  but we are using `content` here, which is just an alias for `model`. You can use any one of them based on preference.


Now go to `localhost:4200/posts` to see the list of posts.

##### Auto redirect to `posts` route
First create a file `index.js` in `app/routes` directory. 
We will modify `app/routes/index.js` to file automatically redirect from `/` to `/posts`.

Our `index.js` file looks like this
```js
import Ember from 'ember';
export default Ember.Route.extend({
  redirect() {
    this.transitionTo('posts');
  }
});
```

#### Transitioning to post route

We will modify `posts.hbs` now. Instead of just showing the post title we will use `link-to` helper provided by Ember to create link to individual post page.

```hbs
	<strong>{{#link-to 'posts.post' post}}{{post.title}}{{/link-to}}</strong>
```

the first paramter to `link-to` is full path to the end route using the endpoints mentioned in router.js

Now if you click on each link, the url will change to `localhost:4200/posts/{{whatever_id}}`

#### Show post data

Now modify `app/routes/posts/post.hbs` to 
```html
<h3>{{content.title}}</h3><br>
<p>{{content.content}}</p>
```


#### Fixing the refresh
 Now if you go to localhost:4200  you'll be redirected to /posts and you'll get a list of post title with link to dynamic route which can show you contents of those post. In the link-to we are passing the whole post object.

 If you click on any post then everything works fine. but if you're already on some post and try to refresh the page. See, the data is lost. What do we do now?
There is a solution for that as well. Since our data is hardcoded and coming from posts route.

Before solving this issue I'll try to explain some important concepts.
The Ember.Route provides us model hook which we are already using for posts route. but in post route we are not overriding any such model hook so how does it get that post data automatically.
Route class has one more hook called `setupController`. the default implementation  provided by Ember is as below.
```js
setupController(controller, context, transition) {
    if (controller && (context !== undefined)) {
      set(controller, 'model', context);
    }
}
```

this hook is called automatically after model hook returns data and sets it to a variable called `model` on the corresponding controller.

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
this.route('post', { path: '/:id'});```
which expects an id (a number or string). But in our link-to we are passing the whole object.
In this case, Ember automatically understands that you already have data and tries match dynamic property `:id` to `id` in post object. Because of this assumption it skips the model hook and directly calls the setupController on post route.

Other way to reach at post route is directly through url or refreshing on any post.
So let's say we refresh on route `localhost:4200/posts/1`. In this case we will hit model hook first which we is not implemented yet so setupcontroller will be called with null data.

Now let's solve this problem by implementing model hook. Add below lines to your post route

```js
model(params, transition){
	let posts = this.modelFor('posts');
	let id = +params.id;
    let [post] = posts.filterBy('id', id);
	return post;
}```

Now if you refresh the `posts/1`, you'll be able to see same data if navigated here from posts page. 

You can also try out passing just id in link-to
`{{#link-to 'posts.post' post.id}}{{post.title}}{{/link-to}}`

Now the model hook of post route will hit first, no matter how you reach that page. But it is discouraged, because if you were actually calling some api. Then we don't want multiple calls to fetch the same data which already exists. 

In this part we learn about very basics of Ember router, routes, controllers and 
some interesting things which people come across after months of using Ember.js

Here are the screenshots.

Screenshot 1

Screenshot 2. 


As we go through this tutorial I will keep pushing code on this repo. 
I will also create versioned tags after each part of this tutorial series.
First version is available here.