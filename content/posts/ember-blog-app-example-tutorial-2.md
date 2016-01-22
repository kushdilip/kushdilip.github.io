+++
draft = true
type = "post"
banner = ""
categories = []
date = "2016-01-20T09:48:48+05:30"
images = []
menu = ""
tags = []
title = "ember blog app example tutorial 2"

+++

ember blog app tutorial part 2:

- agenda
  - deploy it on github pages.
  - integrate purecss
  - editing data - actions.

<!--more-->

Deploy to github
	- npm install -g gulp-cli  
	- npm install --save-dev gulp gulp-gh-pages
	
add npm script 
	"deploy": "ember build --environment production && gulp deploy"
	
	

	
add gulpfile.js at root
var gulp = require('gulp');

var ghPages = require('gulp-gh-pages');



gulp.task('deploy', function() {

  return gulp.src('./dist/**/*').pipe(ghPages({branch: 'gh-pages'}));

});
	


in config/environment.js
if (environment === 'production') {

    ENV.rootUrl = '/awesome-json-editor';

  }

locationType: 'hash'

add line to .gitignore
	- .publish

now run `npm run deploy`


demo
for me it's available at 
	kushdilip.github.io/ember-blog-example


See the commit https://github.com/kushdilip/ember-blog-example/commit/aa11e201e475335200ff62e59dd8064c71a77895 for all the required changes.


- PURECSS Integration
   Right now our app looks ugly and I am not a css expert. So I have decided to use a very tiny css library called [purecss](http://purecss.io/). It is responsive and has lots of fancy stuff for our needs. 

We will include purecss using an ember-addon called ember-pure. This addon will automatically include pure to our bower packages. And at runtime it will do the import as well.

- Run ember install ember-pure

It will will add pure bower package and ember-pure npm module.


- Pure has different modules. There is base part and other  modules viz Grids, Forms, Buttons, Table, Menus

By default we get all. If you don't want all then you can select only few by configuring [ember-pure](https://github.com/mike-north/ember-pure#configuration) 




- MODIFY TEMPLATES 
- I copied the custom css from [blog layout](http://purecss.io/layouts/blog/) and pasted in app/styles/app.css
- all the styleling and template changes can be found in this commit 
https://github.com/kushdilip/ember-blog-example/commit/27dc645feca9b686a0618350f3723ecf76aa4e46

Now our app looks little neat
[Screenshot]



- EDITING
- Add two button with action edit and delete
	<nav class="nav pure-u-md-1-4">
          <ul class="nav-list">
              <li class="nav-item">
                  <button class="pure-button pure-button-primary" type="button" name="button" {{action "editPost"}}>Edit</button>
              </li>
          </ul>
        </nav>


- Now we need post controller for actions. controllers/posts/post.js
	- toggleEdit
	- if else in template

 	look at commit https://github.com/kushdilip/ember-blog-example/commit/2e57a1fab4aed1bd978c5719ccd0bc18123802b3
