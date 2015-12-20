+++
type = "post"
date = "2014-05-26T00:05:00+05:30"
draft = false
title = "Add Reindent keyboard shortcut to Sublime-Text 3"
slug = "add-reindent-keyboard-shortcut-to-sublime-text-3"
tags = ["sublime-text", "tutorial"]
categories = ["How to"]
aliases = [
	"add-reindent-keyboard-shortcut-to-sublime-text-3"
]
+++
I like my code to be always properly formatted, which makes it easier to read and understand. I use Sublime-text for coding and it has Reindent feature which can be found at `Edit>>Line>>Reindent` ,but everybody wants a keyboard shortcut.
<!--more-->

Here is how you can add this shortcut in sublime

- Go to **`Preferences >> Key Bindings-User >>`**

- Now add below key value pair to existing json array (mostly it would be empty previously)  **`{ "keys": ["ctrl+shift+r"], "command": "reindent"}  `**

- My file contents looks like this
```
[
    { "keys": ["ctrl+shift+r"], "command": "reindent"}
]
```

Instead of `ctrl+shift+r` you can have any other shortcut you like eg. `f12`, `ctrl+r` ...

And remember, To make this shortcut work , you need to have syntax highlighter plugin already installed for the particular programming language you are using.

Thats it for now. Enjoy the beautiful code.
