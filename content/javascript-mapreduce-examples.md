+++
type = "post"
date = "2014-06-13T02:03:00+05:30"
draft = false
title = "Javascript MapReduce examples"
slug = "javascript-mapreduce-examples"
aliases = [
	"javascript-mapreduce-examples"
]
+++
Recently, I was using map and reduce functions in javascript for my project. These are very userful. You can use them for different kind of array manipulations. Here I am listing out various use cases with code snippets.

####1.  Finding unique elements in an Array

<pre><code class="javascript">
var cities = ["bombay", "delhi", "bombay", "delhi", "delhi", "chennai"];

var uniqueCities = cities.reduce(function(p, c){
         if(p.indexOf(c)<0) p.push(c);
            return p;
         },[]);
console.log(uniqueCities); // ["bombay", "delhi", "chennai"]

</code></pre>

####2. Sum up array of numbers


```
var foo = [1,2,3,4,5];
var bar = foo.reduce(function(sum, a) { return sum + a; }, 0)
var barOne = foo.reduce( function(sum, a) { return sum + a; }, 1)
console.log(bar, barOne) // 16
```

here, the second argument of reduce is initial value of sum. If you don't give the second argument at all, code will work generally but not in case of complex objects.
