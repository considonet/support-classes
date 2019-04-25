var FeatureDetect = /** @class */ (function () {
    function FeatureDetect() {
    }
    FeatureDetect.isTouchDevice = function (onSupported, onNonSupported) {
        if (onSupported === void 0) { onSupported = null; }
        if (onNonSupported === void 0) { onNonSupported = null; }
        if (typeof (("ontouchstart" in window) || (window.DocumentTouch && document instanceof window.DocumentTouch)) !== "undefined") {
            if (onSupported !== null) {
                onSupported();
            }
        }
        else {
            if (onNonSupported !== null) {
                onNonSupported();
            }
        }
    };
    FeatureDetect.supportsWebp = function (onSupported, onNonSupported) {
        if (onSupported === void 0) { onSupported = null; }
        if (onNonSupported === void 0) { onNonSupported = null; }
        var image = new Image();
        image.onerror = function () {
            if (onNonSupported !== null) {
                onNonSupported();
            }
        };
        image.onload = function () {
            if (image.width === 1) {
                if (onSupported !== null) {
                    onSupported();
                }
            }
            else if (onNonSupported !== null) {
                onNonSupported();
            }
        };
        image.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=";
    };
    FeatureDetect.isAndroidBrowser = function (onTrue, onFalse) {
        if (onTrue === void 0) { onTrue = null; }
        if (onFalse === void 0) { onFalse = null; }
        var navU = window.navigator.userAgent;
        var isMobileAndroid = /Android/i.test(navU);
        // Apple webkit version detection
        var regExAppleWebKit = new RegExp(/AppleWebKit\/([\d.]+)/);
        var resultAppleWebKitRegEx = regExAppleWebKit.exec(navU);
        var appleWebKitVersion = (resultAppleWebKitRegEx === null ? null : parseFloat(regExAppleWebKit.exec(navU)[1]));
        // Chrome version detection
        var regExChrome = new RegExp(/Chrome\/([\d.]+)/);
        var resultChromeRegEx = regExChrome.exec(navU);
        var chromeVersion = (resultChromeRegEx === null ? null : parseFloat(regExChrome.exec(navU)[1]));
        if (isMobileAndroid && (appleWebKitVersion !== null && appleWebKitVersion < 537) || (chromeVersion !== null && chromeVersion < 37)) {
            if (onTrue !== null) {
                onTrue();
            }
        }
        else {
            if (onFalse !== null) {
                onFalse();
            }
        }
    };
    return FeatureDetect;
}());

var _hasClass = function (el, className) { return el.classList ? el.classList.contains(className) : Boolean(el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"))); };
var _addClass = function (el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else if (!_hasClass(el, className)) {
        el.className += " " + className;
    }
};
var addClass = function (el, bem, className) {
    _addClass(el, (bem ? "-" : "") + className);
};
var addClasses = function (namespaceLessBem, features, el) {
    if (namespaceLessBem === void 0) { namespaceLessBem = false; }
    if (features === void 0) { features = ["webp", "androidbrowser", "touchdevice"]; }
    if (el === void 0) { el = document.getElementsByTagName("html")[0]; }
    features.forEach(function (feature) {
        switch (feature) {
            case "touchdevice":
                FeatureDetect.isTouchDevice(function () { addClass(el, namespaceLessBem, "touchdevice"); });
                break;
            case "webp":
                FeatureDetect.supportsWebp(function () { addClass(el, namespaceLessBem, "webp"); }, function () { addClass(el, namespaceLessBem, "no-webp"); });
                break;
            case "androidbrowser":
                FeatureDetect.isAndroidBrowser(function () { addClass(el, namespaceLessBem, "androidbrowser"); });
                break;
        }
    });
};

export default addClasses;
