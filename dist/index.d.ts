declare type Feature = "webp" | "androidbrowser" | "touchdevice";
declare const addClasses: (namespaceLessBem?: boolean, features?: Feature[], el?: HTMLElement) => void;
export default addClasses;
