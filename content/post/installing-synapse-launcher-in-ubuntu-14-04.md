+++
type = "post"
date = "2014-06-08T10:50:00+05:30"
draft = false
title = "Installing Synapse launcher in Ubuntu 14.04"
slug = "installing-synapse-launcher-in-ubuntu-14-04"
tags = ["ubuntu", "tools"]
categories = ["Tools"]
aliases = [
	"installing-synapse-launcher-in-ubuntu-14-04"
]
+++
I recently upgraded from Ubuntu 12.04 LTS to 14.04. I was quite used to of the Awesome Synapse launcher on Ubuntu 12.04. Just press Ctrl + Space and synapse is there to serve you.

Unfortunately Synapse is not directly available through Software Centre in 14.04. But you can install through testing PPA. just follow this steps
<!--more-->

##### 1 . Open terminal and add the ppa and press Enter
```
sudo apt-add-repository ppa:synapse-core/testing
```
##### 2 . Now update the Software Repository and after that install synapse
```
sudo apt-get update
sudo apt-get install synapse
```
That's it. Now enjoy the awesomeness of Synapse.
