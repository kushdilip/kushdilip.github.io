+++
banner = ""
categories = []
date = "2016-02-22T19:28:38+05:30"
description = ""
images = []
menu = ""
tags = []
title = "recursively rename file folder names"

+++

<!--more-->

Below commands will help you recursively rename file & folder names

- First install zsh
  http://strcat.de/zsh/#zmv

- run the commands in shell

```
$ zsh
$ autoload zmv
$ zmv -W '**/*dk*' '**/*kd*’
```

---
For reference http://www.drbunsen.org/batch-file-renaming/