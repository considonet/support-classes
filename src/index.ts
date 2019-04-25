import FeatureDetect from "./classes/FeatureDetect";

type Feature = "webp" | "androidbrowser" | "touchdevice";

const _hasClass = (el: HTMLElement, className: string) => el.classList ? el.classList.contains(className) : Boolean(el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)")));

const _addClass = (el: HTMLElement, className: string) => {

  if (el.classList) {
    el.classList.add(className);
  } else if (!_hasClass(el, className)) {
    el.className += " " + className;
  }

};

const addClass = (el: HTMLElement, bem: boolean, className: string) => {
  _addClass(el, (bem ? "-" : "") + className);
};

const addClasses = (namespaceLessBem: boolean = true, features: Feature[] = [ "webp", "androidbrowser", "touchdevice" ], el: HTMLElement = document.getElementsByTagName( "html")[0]) => {

  features.forEach(feature => {

    switch(feature) {

      case "touchdevice":

        FeatureDetect.isTouchDevice(() => { addClass(el, namespaceLessBem, "touchdevice"); });
        break;

      case "webp":
        FeatureDetect.supportsWebp(() => { addClass(el, namespaceLessBem, "webp"); }, () => { addClass(el, namespaceLessBem, "no-webp"); });
        break;

      case "androidbrowser":

        FeatureDetect.isAndroidBrowser(() => { addClass(el, namespaceLessBem, "androidbrowser"); });
        break;

    }

  });

};

export default addClasses;
