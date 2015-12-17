+++
type = "post"
date = "2014-01-21T12:00:00+05:30"
draft = false
title = "How to use jQuery UI datepicker"
slug = "how-to-use-jquery-ui-datepicker"
tags = ["javascript", "jquery", "how-to"]
categories = ["Programming"]
aliases = [
	"how-to-use-jquery-ui-datepicker"
]
+++
I was developing a simple java web application where I needed a datepicker. So here is how I used the jQuery UI datepicker in my application.

First you need to include jQuery UI javascript and css in head of your html page.

```
<head>  
 <script type="text/javascript"  
      src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>  
 <link  
      href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css"  
      rel="stylesheet" type="text/css" />  
 <script  
      src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>  
 </head>
```

Then add following html code in body section of your page where you want datepicker.

`<input id="datepicker" />`

```
<script type="text/javascript">  
      $(document).ready(function() {  
           $("#datepicker").datepicker({  
                changeMonth : true,  
                changeYear : true,  
                dateFormat : "yy-mm-dd",  
                altField : "#alternate",  
                altFormat : "DD, d MM, yy",  
                showButtonPanel : true,  
                showOtherMonths : true,  
                selectOtherMonths : true,  
                showOn : "button",  
                buttonImage : "calendar.gif",  
                buttonImageOnly : true,  
                showAnim : "slide"  
           });  
      });  
 </script>  
```

Above javaScript code runs as soon as the full html page is ready. The various options are for different variation available with the datepicker ui. You can remove and add any option as per the requirements.

Suppose you don't want the animation while calendar loads, then remove the last option 'showAnim : "slide".

You can find different variations at [jQuery UI datepicker](http://jqueryui.com/datepicker/).
I'll soon upload zip of html file with working the Datepicker.

*Disclaimer: This post was originally posted by me only on my other blog dated October 24, 2012*
