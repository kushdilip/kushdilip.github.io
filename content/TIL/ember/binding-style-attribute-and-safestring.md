+++
banner = ""
categories = []
date = "2016-02-13T19:53:42+05:30"
images = []
menu = ""
tags = []
title = "Binding style attribute and safestring in Ember"

+++

Many times we want to have custom styles in our ember templates which are controlled via controller/components.

<!--more-->

For above purpose we can form the whole style string as computed property and do the binding in htmlbars, but there are two things we need to take care of 
  1. Don't put quotes around that binding property in template.
  2. return safeString value from computed property

Below code demonstrates how to do that. 

`components/x-component.js`
```js
export default Ember.Component.extend({
  progress: 0,
  barWidth: Ember.computed('progress', {
    get(){
      return Ember.String.htmlSafe(`width: ${this.get('progress')}%`);
    }
  })
});
```
Note the usage of  `Ember.String.htmlSafe` in above code, and template strings ` ` in computed property.

`templates/components/x-component.hbs`
```html
<div class="progress-bar" style={{barWidth}}>...</div>
```
Note the no quotes around `{{barWidth}}`. 
