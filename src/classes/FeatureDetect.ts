export default class FeatureDetect {

  public static isTouchDevice(onSupported: () => void = null, onNonSupported: () => void = null): void {

    if(typeof(("ontouchstart" in window) || ((window as any).DocumentTouch && document instanceof (window as any).DocumentTouch)) !== "undefined") {
      if(onSupported !== null) {
        onSupported();
      }
    } else {
      if(onNonSupported !== null) {
        onNonSupported();
      }
    }
  }

  public static supportsWebp(onSupported: () => void = null, onNonSupported: () => void = null): void {

    const image = new Image();
    image.onerror = () => {
      if(onNonSupported !== null) {
        onNonSupported();
      }
    };
    image.onload = () => {
      if(image.width === 1) {
        if(onSupported !== null) {
          onSupported();
        }
      } else if(onNonSupported !== null) {
          onNonSupported();
      }
    };

    image.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=";

  }

  public static isAndroidBrowser(onTrue: () => void = null, onFalse: () => void = null): void {

    const navU = window.navigator.userAgent;
    const isMobileAndroid = /Android/i.test(navU);

    // Apple webkit version detection
    const regExAppleWebKit = new RegExp(/AppleWebKit\/([\d.]+)/);
    const resultAppleWebKitRegEx = regExAppleWebKit.exec(navU);
    const appleWebKitVersion = (resultAppleWebKitRegEx === null ? null : parseFloat(regExAppleWebKit.exec(navU)[1]));

    // Chrome version detection
    const regExChrome = new RegExp(/Chrome\/([\d.]+)/);
    const resultChromeRegEx = regExChrome.exec(navU);
    const chromeVersion = (resultChromeRegEx === null ? null : parseFloat(regExChrome.exec(navU)[1]));

    if(isMobileAndroid && (appleWebKitVersion !== null && appleWebKitVersion < 537) || (chromeVersion !== null && chromeVersion < 37)) {
      if(onTrue !== null) {
        onTrue();
      }
    } else {
      if(onFalse !== null) {
        onFalse();
      }
    }

  }

}
