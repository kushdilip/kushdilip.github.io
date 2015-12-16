+++
type = "post"
date = "2014-06-15T23:14:00+05:30"
draft = false
title = "Zeal : Offline API documentation browser for Linux"
slug = "zeal-offline-api-documentation-browser-for-linux"
aliases = [
	"zeal-offline-api-documentation-browser-for-linux"
]
+++
Quoted from zealdocs.org "Zeal is a simple offline API documentation browser inspired by [Dash](http://kapeli.com/dash) (OS X app), available Linux and Windows".

Zeal gives you offline API documentation for most of the Libraries out there like Angular, Backbone, Django and many more. You can check the list on Dash's [website](http://kapeli.com/dash#docsets)

You can easily install on Ubuntu 14.04 by following steps
#####Run following commands in terminal one by one
```
sudo add-apt-repository ppa:jerzy-kozera/zeal-ppa
sudo apt-get update
sudo apt-get install zeal
```

After installing Zeal it can be started from terminal by typing `zeal`. Add it to to Startup Application for quick access via hotkey which can be configured in `zeal` configurations.

####Issues faced and Solutions

- I faced a minor issue after installing Zeal. I was not able to see main menu on top of it from where you can I found solution at [zeal issues](https://github.com/jkozera/zeal/issues/134) . I tried removing appmenu-qt5 package which worked from me.
- Every time starting Zeal will show a popup that it's Hotkey is confliting with system's. So I changed it's default Hotkey from Alt + Space to Ctrl + Shift + Space ([Synapse](http://kushdilip.com/blog/installing-synapse-launcher-in-ubuntu-14-04/) is already using Ctrl + Space)
