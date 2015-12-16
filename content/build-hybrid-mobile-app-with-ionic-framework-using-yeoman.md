+++
type = "post"
date = "2014-09-28T17:42:01+05:30"
draft = false
title = "Build Hybrid Mobile App with Ionic Framework and Yeoman"
slug = "build-hybrid-mobile-app-with-ionic-framework-using-yeoman"
image = "/blog/images/2015/09/headerIonic1.jpg"
aliases = [
	"build-hybrid-mobile-app-with-ionic-framework-using-yeoman"
]
+++
The hybrid app technolgoies have revolutioned the development of cross platform mobile applications.
There are various free and licenced platform in market for building beautiful cross platform apps e.g. [Phonegap](http://phonegap.com/), [Titanium](http://www.appcelerator.com/titanium/), [Sencha Touch](http://www.sencha.com/products/touch) and [CrossWalk](https://crosswalk-project.org/).
Most popular one is **Phonegap**. It uses Webkit rendering engine.While **Crosswalk** is similar but developed by Intel and supports latest Blink rendering engine used in latest chrome browsers.

There is a new Platform in market called [Ionic Framework](http://ionicframework.com/). It is free and Open source. Ionic offers a library of mobile-optimized HTML, CSS and JS components for building highly interactive apps. There is a vibrant community behind Ionic. It utilizes [AngularJS](http://angularjs.org/), which is one of the most popular frontend javascript framework. Though it internally used phonegap to build and package the apps for Android and iOS platforms

There are a lot of Resources on Ionic Website. Here I am going to explain how to build your first Ionic cross platform app using [Ionic](http://ionicframework.com/) and [Yeoman](http://yeoman.io/).

[Yeoman](http://yeoman.io) is scaffolding tool, which has lots of generators available and scaffolds full project structure with necessary libraries for you. Today most of the web developers use Yeoman aka Yo for web development.

<br>
***So Let's Start***

####1. Install and Setup `Node.js` and `npm`.
Even though there are thousands of tutorials available for Installing Node.js, I'll explain here easiest method for Ubuntu 14.04 and Mint 17.
If you have Node installed already then skip to next step.

  Run below commands in terminal, which will also install `npm` package manager.


```
  $ sudo add-apt-repository ppa:chris-lea/node.js
  $ sudo apt-get update
  $ sudo apt-get install nodejs
```

<br>
####2. Install Ionic Framework, cordova and other npm packages

- Run below command to install `cordova` and `ionic` globally using `npm`.
```
$ npm install -g cordova ionic
```

- You'll need few other package for build process later on, which can also be installed using npm

```
$ npm install -g grunt bower yeoman
```

- You'll also need [yeoman generator](http://yeoman.io/generators/) for Ionic
```
$ npm install -g generator-ionic
```
<br>
####3. Create and build Ionic project
- Create directory named `my-ionic-project` and navigate to it.
```
$ cd my-ionic-project && cd $_
```

- Now run ionic generator using `yo` cammand
```
$ yo ionic
```

These will present you and interactive terminal. Answer `No` for `Saas`, you won't need it now. Don't add other plugins packages for now. It will also ask for Starter Template, Choose 3rd option Side Menu.

All of these looks like below...

```
$ yo ionic
    _             _
   (_)           (_)
    _  ___  _ __  _  ___
   | |/ _ \| '_ \| |/ __|
   | | (_) | | | | | (__
   |_|\___/|_| |_|_|\___|

[?] Would you like to use Sass with Compass (requires Ruby)? No
Created a new Cordova project with name "Temp" and id "com.example.Temp"
[?] Which Cordova plugins would you like to include? org.apache.cordova.console, org.apache.cordova.device
[?] Which starter template [T] or example app [A] would you like to use? [T] Side Menu
...
...
```

It will generate a folder structure for you similar to this

<img src="http://i1370.photobucket.com/albums/ag256/kushdilip/my-ionic-project_zps677308c0.png" alt="my-ionic-project" >

<br>
#### 3. Testing Application on browser.
- Run below command from your project directory to run the web application server
```
$ grunt serve
```
- You can test the application on `http://localhost:9000` in any browser.

- If you want to change the port, you can do so from `Gruntfile.js` in root of your project.


- if you are connected to local network or wifi, then change `hostname` value in `Gruntfile.js` to `0.0.0.0` and now find out your machine ip using ifconfig. e.g. if it is `192.168.2.4` then you can the app from any device in the same network by pointing their browser to `http://192.168.2.4:9000`

####3. Running on Android Device

To run your first ionic application on actual mobile platform like android, follow below steps.

- Add and build cordova platform for Android in project.
```
$ cordova platform add android

$ grunt cordova
```

- Now pick **MyIonicProject-debug-unaligned.apk** from `my-ionic-project/platforms/android/ant-build/` and move it to your device by connecting via USB or dropbox or Google Drive or anything else you like. And then install it.

---
That's it. Follow the tutorial and let me know through comments if you face any problem.
