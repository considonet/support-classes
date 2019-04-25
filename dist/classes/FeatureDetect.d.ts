export default class FeatureDetect {
    static isTouchDevice(onSupported?: () => void, onNonSupported?: () => void): void;
    static supportsWebp(onSupported?: () => void, onNonSupported?: () => void): void;
    static isAndroidBrowser(onTrue?: () => void, onFalse?: () => void): void;
}
