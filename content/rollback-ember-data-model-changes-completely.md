+++
type = "post"
date = "2014-11-05T00:48:54+05:30"
draft = false
title = "Rollback Ember-Data Model changes completely"
slug = "rollback-ember-data-model-changes-completely"
tags = ["ember", "data", "ember-data"]
categories = ["Ember"]
aliases = [
	"rollback-ember-data-model-changes-completely"
]
+++
Ember-Data models have a property called `isDirty`. Whenever you make some changes to local model and it's not yet saved to server, `isDirty` property will be true.
Generally our models have various `belongsTo` and `hasMany` relationships. So if some child of model gets dirty, then doing `model.rollback()` doesn't rollbacks changes on child ember objects.

Here I'm going to explain how to handle similar situation.

Suppose you have Ember-Data Models called `House` and `Address`

```
var House = DS.Model.extend({
	id: DS.attr("string"),
    member_count: DS.attr("number"),
    address: DS.belongsTo("Address")
})

var Address = DS.Model.extend({
	house_no: DS.attr("number")
    Street: DS.attr("string")
    city: DS.attr("string")
    state: DS.attr("string")
})

```

Let's assume I fetched `house` object from server. In my client application if change `member_count` to some value say 5.
` house.set("member_count", 5)`
Now `house.get("isDirty")` will be true and upon executing `house.rollback()` will reset the value to original. but if I change something in address object, say `house.get('address').set('house_no', 10)`. Now `house` is still clean although it's child `address` is now dirty.

You can use below code to rollback the entire house as well as it's childs.

```
var deepRollback = function(model) {
    var that;
    that = this;
    if (model.get("isDirty")) {
      model.rollback();
    }
    return model.eachRelationship(function(key, relationship) {
      if (relationship.kind === "belongsTo") {
        return that.deepRollback(model.get(key));
      }
    });
  }

````

now executing `deepRollback(house)` will rollback house and all it's `belongsTo` objects.
