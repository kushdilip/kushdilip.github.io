+++
type = "post"
date = "2014-11-23T15:14:00+05:30"
draft = false
title = "Use different versions of Node.js using NVM"
slug = "use-different-versions-of-node-using-nvm"
tags = ["nodejs", "javascript", "nvm"]
categories = ["Setup"]
aliases = [
	"use-different-versions-of-node-using-nvm"
]
+++
There are two popular methods of installing Node.js on linux machines. First, using repository and other using NVM. There is third method also, using Software manager but since there is some other package named `node` which messes up with nodejs, so kindly avoid that.

<!--more-->


#### Method 1.
For the first method use below command on your terminal to install latest version of Node.js on your ubuntu system

- Add cris-lea node ppa repository
`sudo add-apt-repository ppa:chris-lea/node.js`

- Update your pacakge manager
`sudo apt-get update`

- Install nodejs
`sudo apt-get install nodejs`

- Check the version of nodejs using `node -v`

#### Method 2.
This is a smarter method and gives you more control over **Node.js** versions.
[NVM](https://github.com/creationix/nvm) is Node Version Manager which installs and manages different versions of Node.js on your system.

- For installing nvm, you need few dependency packages first. You many already have them, if not then you can install them using below command.

`sudo apt-get install build-essential libssl-dev curl`

- Download the nvm installation script from nvm [GitHub page](https://github.com/creationix/nvm). The version number may be different, but normally, you can download and install it using following command:

`curl https://raw.githubusercontent.com/creationix/nvm/v0.7.0/install.sh | sh`

- Above command might fail if you're not a root user. For linux mint the script tries to install in directory `/etc/mdm/`. So, You need to change the owner of `/etc/mdm/` directory if you are using Linux Mint. Use below command for this situations. Assuming you are logged in as  `xyzuser`.

`sudo chown -R xyzuser /etc/mdm`

- To gain access to the nvm features, you'll need to log out and log in back, or you can source the ~/.profile file so that your current session knows about the changes:

`source ~/.profile`

---
#### Few useful NVM commands
- Find out available Node.js versions.<br/>
`nvm ls-remote`
- Install a particular version of Node.js<br/>
`nvm install 0.11.33`
- Use a particular version of Node.js<br/>
`nvm use 0.11.13`
- List version of Node.js available on your machine<br/>
`nvm ls`
- Set a particular version as default.<br/>
`nvm alias default 0.11.13`

There is one caveat. NVM installs Node.js in your home directory and other users can't access it, so you should always have one of stable version of node.js installed using **Method 1** mentioned above.

Why so much emphasis on using nvm, because you might be working on different Node.js projects which may work on a particular version and break on others. So using NVM saves a lot of effort.

---
For more info visit the [NVM Github Repository](https://github.com/creationix/nvm). For any issue please comment below.
