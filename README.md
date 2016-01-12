trace.js
========

Monitor a variable's value on screen. Useful when monitoring values that updates frequently like mouse position, scroll top etc.

Basic usage:
-----------

    trace('msg', 'Hello world!');

 Or with an updating value:

     setInterval(function () {
         trace('Time', new Date().getTime());
     }, 1000 / 30);


Themes
------

There are five themes to use, 0 - 4. Themes are set the first time trace is being used. Set theme like this:

    trace('msg', 'Hello world!', 1);

Customize
---------

Or customize it like this:

    trace('Msg', 'Hello world', {
        position: 'bl', // Default tr (), values tr | br | tl | bl
        margin: 20, // Default 10
        width: 350,  // Default 280
        padding: 18, // Default 10
        fontSize: 18, // Default 12
        color: '#333333',  // Default #000
        backgroundColor: '#eaeaea', // Default #eee
        lineColor: '#440000', // Default #7ACEF5
        zIndex: 10, // Default 9999
        shadow: '' // Default '1px 1px 10px rgba(0, 0, 0, 0.3)'
    });
