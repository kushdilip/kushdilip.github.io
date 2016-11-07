+++
type = "post"
date = "2014-02-24T01:14:00+05:30"
draft = false
title = "Accessing Guest (VirtualBox) Node.js Application from Windows/Ubuntu Host"
slug = "accessing-guest-virtualbox-node-js-application-from-windowsubuntu-host"
tags = ["virtualbox", "windows", "ubuntu"]
categories = ["How to"]
aliases = [
	"accessing-guest-virtualbox-node-js-application-from-windowsubuntu-host"
]
+++
If you are running a Node.js Application inside a Ubuntu VirtualBox machine and want to test the same application in any browser inside your Windows/Ubuntu Host OS, then follow this small tutorial. You can even test the application on any other device in same wifi or lan network as your Host/Guest Machine.
<!--more-->

#### The primary reasons I wanted this kind of hack were:
  - The Guest machine becomes slow and laggy if you start any browser in it to test your applications.
  - Sometime you just want to use terminal.
  - Test the Web Application in mobile or tablet device.

I am explaining here the steps to make it work.

#### Virtual Box Settins
- Make sure the guest OS for which you are setting up is not running.
- Now Open Virtual Box Manager and Select the machine.
- Go to Settings -> Network -> Adapter 1(first tab). Network Adapter should be enabled here.
- In Attached to: DropDown select Bridged Adapter
- In Name:Dropdown, Select WiFi or LAN Adapter to which other devices will be connected. I have selected WiFi because my mobile, tablet and laptop are connected to it.
- That’s it. Now start your Guest OS.

<img src="http://i1370.photobucket.com/albums/ag256/kushdilip/virtualBox_zpsb165a320.png" alt="VirtualBox Setting" >

#### Changes in Node.js Server
I assume you are already familiar with Node.js. Below is the simple code that I have taken from [nodejs.org](nodejs.org),

```
var http = require('http');
var PORT = 1337;  //Can be any open port
var IP = '127.0.0.1'; //for localhost
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(PORT, IP);
console.log('Server running at http://'+ IP + ':'+ PORT + '/');
```

The only change we have to do here is assingn `0.0.0.0` to IP instead of standard `127.0.0.1`
```
var IP = '0.0.0.0';
```
Put the code in a file named server.js and run node server.js in it’s file path.
```
$ node /path/to/file/server.js
```

<img src="http://i1370.photobucket.com/albums/ag256/kushdilip/serverrunning_zps12417819.png" alt="terminal" >

Now go to terminal and find ip of your virtual machine by typing ifconfig. It will give you some local ip address for `eth0`. I am getting `192.168.2.10`.
That’s it. Now open any browser in Host machine. Type url with above above IP and assigned PORT in `server.js` like this
`http://192.168.2.10:1337`
For other devices like mobile, tablet or any machine on same network, use same url `http://192.168.2.10:1337`.

Here is the screenshot from my mobile device

<img src="http://i1370.photobucket.com/albums/ag256/kushdilip/3cf7e926-efad-470b-b02f-09383ce5b891_zps1a788487.png" alt="screenshot mobile phone" >

---
Please comment for any doubts.
