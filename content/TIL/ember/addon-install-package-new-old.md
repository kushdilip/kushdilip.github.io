+++
banner = ""
categories = []
date = "2016-02-11T23:59:04+05:30"
images = []
menu = ""
tags = []
title = "Ember addon install package old & new"

+++

Ember-cli provides `addAddonsToProject` api method for addon developers to install other addons using blueprints. In older versions of ember-cli(perhaps < 1.13) `addAddonsToProject` method doesn't accepts array of packages but the new one does. 

So here is the code to support your addon users who are using old or newer versions of ember-cli.


<!--more-->


```js
//excerpt from sample ember addon blueprint code

afterInstall: function(options) {
    // example packages list
    var packages = [
      'ember-cli-mirage',
      'ember-metrics'
    ];
    
    this.installPackages(packages);
),

installPackages: function(options, packages) {
  if (typeof this.addAddonsToProject === 'function') { // newer versions of ember-cli
    return this.addAddonsToProject({
      packages: packages
    });
  }
  
  return packages.reduce(function (prev, pkg, index) {
    if (index === 1) {
      prev = this.addAddonToProject(prev);
    }
    return prev.then(this.addAddonToProject(pkg));
  }.bind(this));
}
```