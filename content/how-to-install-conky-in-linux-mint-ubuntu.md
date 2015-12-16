+++
type = "post"
date = "2014-08-31T21:45:36+05:30"
draft = false
title = "How to Install Conky in Linux Mint / Ubuntu"
slug = "how-to-install-conky-in-linux-mint-ubuntu"
aliases = [
	"how-to-install-conky-in-linux-mint-ubuntu"
]
+++
[Conky](http://conky.sourceforge.net/) is a free, light-weight system monitor for X, that displays various system information on your desktop. Using conky you can add diffrent kind of cool widgets to your Desktop. These widget can be used to monitor various system activities, ram & cpu usage or simply to show Date & Time.

In this post I will explain how you can install **Conky** in Linux Mint and Ubuntu.

#### Conky Installation
-  Install `conky` and `conky-all` using terminal or synaptic. Type below command in terminal

```
$ sudo apt-get install conky && conky-all
```

Instead of `conky-all`, you can install `conky-std`. But it's better to go with `conky-all` because it gives you all available features.


- After installing run it using by typing `conky` in terminal
```
$ conky
```
It's better to add conky to startup appliations. Here is how default conky looks in Mint.

<img src="http://i1370.photobucket.com/albums/ag256/kushdilip/Screenshotfrom2014-08-31152119_zpsc880a021.png" alt="conky-default" />


-  The default conky widgets look very boring. You should definitely install `conky-manager` to configure, add more themes and widgets to conky. Use below commands to install conky-manager.
```
$ sudo add-apt-repository ppa:teejee2008/ppa
$ sudo apt-get update
$ sudo apt-get install conky-manager
```

Here is the screenshots of conky-manager. You can see preinstalled widgets, themes. You can also see previews below the lists.

<img src="http://i1370.photobucket.com/albums/ag256/kushdilip/Screenshotfrom2014-08-31213903_zps8c819e42.png" alt="conky-manager-widgets" />

<img src="http://i1370.photobucket.com/albums/ag256/kushdilip/Screenshotfrom2014-08-31213909_zps72df3158.png" alt="conky-managet-themes" />

---
I have chosen **Green Apple Desktop** theme. Here is how it looks.

<img src="http://i1370.photobucket.com/albums/ag256/kushdilip/Screenshotfrom2014-08-31212031_zps01f2e4bf.png" alt="conky-green-apple" />

---
That's it, you can download more themes and widgets from internet and experiment with conky to make it more cool.
