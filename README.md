Timer
=====


Installation
------------

```
meteor add dpankros:timer
```


Quick Start
-----------

```javascript


//fires once at 10 seconds
var single = new Timer(
  10000, 
  function(a){
    console.log('fired!')
  }).start();

//fires every 5 seconds
var periodic = new Timer(
  5000, 
  function(a){
    console.log('going and...')
  }).startPeriodic();

//because that would get annoying...
periodic.stop();

```