# Project Website
Demo and documentation: http://www.dev4web.eu/projects/jquery.vibrate/

Will add a demo for Fixed Period of Vibrate soon.

# About
jQuery Vibrate Plugin is a jQuery component, self-contained, that allows you to have "vibrating" tags in your page, like buttons, DIVs, etc.
It is very simple to use and integrate, and lightweight (only 3.54 kB in minified version)!

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
});
```

### Options
`speed`: default value is 50 milliseconds, but can be changed

`trigger`: it is the triggering event. Default value is "mouseover", another acceptable value is "focus"; other events are not managed

`reverse`: default value is false; if true, the behaviour will be reversed. E.g., if triggering event is "mouseover", the tag will always vibrate but stop when mouse is over.

`overEffect`: this is used only when "reverse" parameter is true. The appliable values are "" (empty string), "stop" or "invert". Default value is "stop":

- `overEffect:"stop"` (default value): when mouse is over the vibration will be stopped and it will start again when mouse is out;
- `overEffect:""` (empty string): when mouse is over the vibration will continue without stopping;

`vibrateClass`: name of a CSS class applied when the tag is vibrating, and removed when it stops (default value "")

`overClass`: name of a CSS class applied when the over effect is triggered, and removed when it ends (default value "") 

## Fixed Period of Vibrate
### Code

```
$('.vibrate').vibrate({
   speed: 50,             // Vibration speed in milliseconds
   stopAfterTime: 5       // Stop Vibrating after a fixed time in seconds
   vibrateClass: "",      // CSS class applied when vibrating (New in vers. 1.1!)
   overClass: "",         // CSS class applied when over effect is triggered (New in vers. 1.1!)   
});
```

### Options
`speed`: default value is 50 milliseconds, but can be changed

`stopAfterTime`: Stop Vibrating after a fixed time in seconds. No default value. If not provided will follow the vibration based on events and triggers. Providing this it will ignore values of `trigger`, `reverse`, `overEffect`

`vibrateClass`: name of a CSS class applied when the tag is vibrating, and removed when it stops (default value "")

`overClass`: name of a CSS class applied when the over effect is triggered, and removed when it ends (default value "")
