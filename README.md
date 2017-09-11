trace.js
========

Version 1.5

By Mattias Johansson, Copyright 2016, Licensed GPL & MIT

Monitor a variable's value on screen. Useful when monitoring values that updates frequently like mouse position, scroll top etc.

![example](http://i.imgur.com/XZRxXIx.png)

Install
-------
Clone or include from CDN:

    <script src="https://cdn.rawgit.com/arpo/trace.js/master/trace.min.js"></script>

Basic usage
-----------

    trace('msg', 'Hello world!');

The first part, the label.

With an updating value:

     setInterval(function () {
         trace('Time', new Date().getTime());
     }, 1000 / 30);

You can also trace arrays and objects (JSON)

To change background color of a trace do this:

    trace('Colored', 'I\'m red', '#ffb8b8');

Themes
------

There are five themes to use, 0 - 4. Themes are set the first time trace is being used. Set theme like this:

    trace('msg', 'Hello world!', 1);

Customize
---------

Or customize it like this:

    trace({
        position: 'bl', // Default tr (), values tr | br | tl | bl
        margin: 20, // Default 10
        opacity: 0.4, // Default 1
        width: 350,  // Default 280
        padding: 18, // Default 10
        fontSize: 18, // Default 12
        color: '#333333',  // Default #000
        backgroundColor: '#eaeaea', // Default #eee
        lineColor: '#440000', // Default #7ACEF5
        zIndex: 10, // Default 9999
        shadow: '' // Default '1px 1px 10px rgba(0, 0, 0, 0.3)'
    });

Reposition like this

    trace({position: 'bl'}); // Default tr (), values tr | br | tl | bl

Disable (On/Off)
----------------------

Turn off and hide:

    trace('_off');

Turn on and show:

    trace('_on');
