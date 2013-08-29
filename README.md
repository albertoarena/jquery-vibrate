# About
jQuery Vibrate Plugin is a jQuery component, self-contained, that allows you to have "vibrating" tags in your page, like buttons, DIVs, etc.
It is very simple to use and integrate, and lightweight (only 3.54 kB in minified version)!

It was developed by [albertoarena](https://github.com/albertoarena). You can see his version here. The link below to a demo is his site.

I modified it to add the Vibrate for a fixed Period and a callback function when the vibration gets over.

# Demo

## For Vibration based on events and triggers

Check out [albertoarena](https://github.com/albertoarena)'s website: http://www.dev4web.eu/projects/jquery.vibrate/

## Fixed Period of Vibrate

Go [here](http://termvader.github.io/jquery-vibrate/).

# Documentation
The Vibrate plugin has some configurable options. Below is an example of available options and their defaults:

## Vibration based on events and triggers
### Code

```
$('.vibrate').vibrate({
   speed: 50,             // Vibration speed in milliseconds
   trigger: "mouseover",  // Triggering event
   reverse: false,        // Reverse behaviour
   overEffect: "stop",    // Over effect, see details below
   vibrateClass: "",      // CSS class applied when vibrating (New in vers. 1.1!)
   overClass: "",         // CSS class applied when over effect is triggered (New in vers. 1.1!)
   callBack: function(){} // Function to call when vibration stops
});
```

### Options
`speed`: Default value is 50 milliseconds, but can be changed

`trigger`: It is the triggering event. Default value is "mouseover", another acceptable value is "focus"; other events are not managed

`reverse`: Default value is false; if true, the behaviour will be reversed. E.g., if triggering event is "mouseover", the tag will always vibrate but stop when mouse is over.

`overEffect`: This is used only when "reverse" parameter is true. The appliable values are "" (empty string), "stop" or "invert". Default value is "stop":

- `overEffect:"stop"` (Default value): When mouse is over the vibration will be stopped and it will start again when mouse is out;
- `overEffect:""` (Empty string): When mouse is over the vibration will continue without stopping;

`vibrateClass`: Name of a CSS class applied when the tag is vibrating, and removed when it stops (default value "")

`overClass`: Name of a CSS class applied when the over effect is triggered, and removed when it ends (default value "")

`callBack`: This function is called whenever vibration stops.

## Fixed Period of Vibrate
### Code

```
$('.vibrate').vibrate({
   speed: 50,             // Vibration speed in milliseconds
   stopAfterTime: 5       // Stop Vibrating after a fixed time in seconds
   vibrateClass: "",      // CSS class applied when vibrating (New in vers. 1.1!)
   callBack: function(){} // Function to call when vibration stops
});
```

### Options
`speed`: default value is 50 milliseconds, but can be changed

`stopAfterTime`: Stop Vibrating after a fixed time in seconds. No default value. If not provided will follow the vibration based on events and triggers. Providing this it will ignore values of `trigger`, `reverse`, `overEffect`, `overClass`

`vibrateClass`: name of a CSS class applied when the tag is vibrating, and removed when it stops (default value "")

`callBack`: This function is called whenever vibration stops.
