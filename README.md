Timer
=====


Installation
------------

```
meteor add dpankros:timer
```


Quick Start
-----------

The timer constructor takes two parameters: 
1. a delay in milliseconds, and 
1. a callback function that takes one parameter an optional data value  

The data value is the value passed into the start or startPeriodic functions


```javascript
//fires once at 10 seconds
var single = new Timer(
  10000, // 10 seconds
  function(data){
    console.log('fired!');
  }).start();

//fires every 5 seconds
var periodic = new Timer(
  5000, // 5 seconds
  function(data){
    console.log('going and...');
  }).startPeriodic();

//... and because that many calls would get annoying...
periodic.stop();

```
