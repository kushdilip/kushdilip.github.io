+++
type = "post"
date = "2014-02-20T12:00:00+05:30"
draft = false
title = "Test WCF Service with WCF Test Client without installing Visual Studio"
slug = "test-wcf-service-with-wcf-test-client-without-installing-visual-studio"
aliases = [
	"test-wcf-service-with-wcf-test-client-without-installing-visual-studio"
]
+++
There are various tools to test WCF services. Visual studio installation comes with default tool called WCF Test Client, which can be run from Visual Studio Command Prompt by typing wcftestclient.
Alternatively for **VS 2010** you can navigate to `C:\Program Files\Microsoft Visual Studio 10.0\Common7\IDE\ ` where you can find and open `WcfTestClient.exe`

<img src="http://i1370.photobucket.com/albums/ag256/kushdilip/wcftestclient_zps51e80bc6.png" alt="wcftest_screenshot" />

So, That was the easy part. What if you are on a machine without Visual Studio or .NET installed and you can't install anything. Such condition arises when you want to test services on a test machine inside Microsoft Test Manager.
There can be two solutions

1. Either find and copy all the wcftestclient.exe and dependent .dll files from some machine which has VS installed to your test machine.(not quite easy)
2. Or find offline version of wcftestclient and somehow transfer it to test machine. (easy but it's hard to find the offline version)

I was in similar situation and somewhere on internet I found this offline zip package of wcftestfclient. It can be downloaded from this google drive [link](https://drive.google.com/file/d/0B9Ls5oqJy_3paGFIZXB2cDRWdFk/edit?usp=sharing) .

There is one more popular tool to test wcf service, called [WCF Storm](http://www.wcfstorm.com/wcf/Default.aspx). The trial version has very limited functionality.
