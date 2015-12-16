+++
type = "post"
date = "2014-01-21T12:00:00+05:30"
draft = false
title = "Use Qt Creator as full fledged C++ IDE"
slug = "use-qt-creator-as-full-fledged-c-ide"
aliases = [
	"use-qt-creator-as-full-fledged-c-ide"
]
+++
 I was putting efforts to learn C++ for so many months but didn't find any suitable IDE on which I can practice. Then few months ago, one of my friend introduced me to Qt Creator, as one of the best IDE for C++. During the free time in this summer I gave it a try and started learning the language with the help of a ebook on this IDE. And surprisingly, I found Qt Creator to be perfect in so many ways. Every feature I was looking for previously, is  available in it.

 Even though, Qt Creator is basically designed for development of Qt applications but It has everything to become a full fledged C++ IDE. I tried it on ubuntu till now. It can be installed directly from software Center. Windows version is also available for download on [website](http://qt-project.org/downloads).


####To properly compile and run C++ projects do as following.
- Create a new C++ Project by first clicking on `File -> New File` or Project then select `Other Projects -> C++ Project` and follow the instructions.

</br>
<figure>
  <img src="http://i1370.photobucket.com/albums/ag256/kushdilip/qtmenu_zps21001adc.png" alt="QT Creator New Project" >
  <figcaption>New QT Project</figcaption>
</figure>
</br>

- You will get checkbox of shadow build, by checking it you can be sure that the source files will be in separate folder than build files.
- Now select the Project mode by clicking on the box below debug box in left side pane. Here go to Run Settings and check the Run in terminal.
- Now go to Tool menu and select `Options->Environment -> General . Here look for Terminal in System. Enter /usr/bin/X11/xterm -e instead of existing text.`
QtCreator is ready to compile and run your C++ projects. Use Ctrl + B to build and Ctrl + R to run or use buttons given at bottom in left panel for build and run or you can use build menu.

####To enable C++11 support do as following.
- Find the your_project_name.pro file in your project hierarchy in Qt Creator. Just add  following line in this .pro file to enable the support

		`QMAKE_CXXFLAGS += -std=c++0x (or -std=gnu++0x)`

</br>
<figure>
  <img src="http://i1370.photobucket.com/albums/ag256/kushdilip/qtconfig_zps52ede2e2.png" alt="QT Project Config" >
  <figcaption>QT Project Config</figcaption>
</figure>
</br>


- This .pro file is used qmake tool to generate makefile for your project. The above line adds flag `-std=c++0x(or -std=gnu++0x)` to `CXFLAGS` in the `makefile`.
- After changing anything in .pro file right click on project and Run qmake so as to generate final Makefile in your build folder
Qt Creator has many attractive features like
- Autoindentation of selected code by pressing Ctrl + /
- Autocomplete feature is awesome and better than almost all other IDEs
- Beautiful animations.
- Split screen using shortcuts like  `Ctrl + E, 2` or `Ctrl + E, 3` or `Ctrl + E, 0`
- Switch Header/Source using `F4`.
- Switch declaration/definition using `Ctrl + Left Click `.
Many more features can be found out by using the it. So Install and Experience one of the Best C++ IDE available.


---
>Disclaimer: This post was originally posted by me only on my other blog dated May 14, 2012
