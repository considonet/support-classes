# support-classes 1.0

A simple browser detection helper. Follows [Modernizr](https://modernizr.com/) approach and offers only minimal detection that we found out to be necessary in most of our projects.

Copyright &copy; 2019 [ConsidoNet Solutions](http://www.considonet.com)

## Features
With `support-classes` one can detect a few browser features (see below). The library adds classes to `html` or any specified DOM element to allow querying them using ordinary CSS.

The CSS classes by default follow no-namespace BEM modifier pattern. For example: `-webp`. If BEM feature is disabled, `webp` class will be added instead.

### WebP image file format support
Class names: `webp` or `no-webp`

WebP is a considerable alternative for bitmaps used on the web. Developed and endorsed by Google, WebP offers smaller files and lossless and non-lossless compression supporting alpha channel transparency, animations and more.
As of 2019, nearly [79% of browsers used globally](https://caniuse.com/#feat=webp) support this format. Non-supporting ones include Apple software (iOS, Safari browsers), Microsoft Internet Explorer and older Microsoft Edge browsers. There is no easy way to workaround this issue.

The general approach is to add a `no-js` to `html` tag and then remove it as soon as possible, then add other classes using this helper. Then via CSS set the fallback background-images by specifying element parents as `no-js` and `no-webp` classes. The WebP images should be available only to children of a `webp` parent.

If `no-js` class will be removed before `body` element gets loaded (i.e. the JS removing the class should be in `head`), no fallback images will be loaded until the actual feature detection will happen. This should save the data transfer and maintain usability for JS-disabled browsers.

### Original Android Browser 
Class name: `androidbrowser`

The original Android Browser is a legacy browser engine, based on WebKit, exposing a lot of bugs and issues. Sometimes dedicated CSS styles have to be prepared to support this browser and there is no way to detect this engine using pure CSS methods or hacks. Browsers exposing these problems include Android 1-4 default browsers (not Chrome!) and Samsung Browser.

Android Browser's market share is decreasing and as of 2019, represents about 1% of all browsers globally. Because of this, that feature detection will become obsolete until the end of 2019. 

### Touch support 
Class name: `touchdevice`

This useful class allows to target touch-enabled devices. Use cases include usability improvements, effects removal and extra optimizations.

Touch device can be also detected using pure CSS4 interaction feature media queries - as of 2019 [90% of browsers used globally](https://caniuse.com/#search=interaction) support it, with a vast majority of mobile browsers (usually touch devices). 

## Compatibility
- In general all ES5-compatible browsers
- IE8+, Android 4+ browsers, iOS 8+

## Installation

Using NPM

`npm run @considonet/support-classes`

Using yarn

`yarn add @considonet/support-classes`

## Usage

The helper has to be used when the target element (to which we assign the classes) is already present in the DOM tree. For this reason it's safe to use `html` element - then the helper can be executed as soon as possible.

```javascript
import addClasses from "@considonet/support-classes";
addClasses(false, ["webp", "androidbrowser"], document.body);
```

Detailed usage:

*addClasses*(namespaceLessBem: boolean, features: string[], el: HTMLElement)

- *namespaceLessBem* - specifies whether the class names should be preceded with `-`. If `true` example classes will be `-webp -touchdevice`. If `false` - `webp touchdevice`. Default: `false`
- *features* - an array of strings with feature names to check. Possible values: `androidbrowser`, `touchdevice`, `webp`. Default: `["androidbrowser", "touchdevice", "webp"]` (all features)
- *el* - HTML element to which the classes will be appended. Default: `<html>` element (`document.getElementsByTagName( "html")[0]`)
