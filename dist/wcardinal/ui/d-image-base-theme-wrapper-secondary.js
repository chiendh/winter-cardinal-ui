var DImageBaseThemeWrapperSecondary = /** @class */ (function () {
    function DImageBaseThemeWrapperSecondary(theme) {
        this._theme = theme;
    }
    DImageBaseThemeWrapperSecondary.prototype.getImageAlignHorizontal = function () {
        return this._theme.getSecondaryImageAlignHorizontal();
    };
    DImageBaseThemeWrapperSecondary.prototype.getImageAlignVertical = function () {
        return this._theme.getSecondaryImageAlignVertical();
    };
    DImageBaseThemeWrapperSecondary.prototype.getImageAlignWith = function () {
        return this._theme.getSecondaryImageAlignWith();
    };
    DImageBaseThemeWrapperSecondary.prototype.getImageMarginHorizontal = function () {
        return this._theme.getSecondaryImageMarginHorizontal();
    };
    DImageBaseThemeWrapperSecondary.prototype.getImageMarginVertial = function () {
        return this._theme.getSecondaryImageMarginVertial();
    };
    DImageBaseThemeWrapperSecondary.prototype.getImageTintColor = function (state) {
        return this._theme.getSecondaryImageTintColor(state);
    };
    DImageBaseThemeWrapperSecondary.prototype.getImageTintAlpha = function (state) {
        return this._theme.getSecondaryImageTintAlpha(state);
    };
    DImageBaseThemeWrapperSecondary.prototype.getImageSource = function (state) {
        return this._theme.getSecondaryImageSource(state);
    };
    return DImageBaseThemeWrapperSecondary;
}());
export { DImageBaseThemeWrapperSecondary };
//# sourceMappingURL=d-image-base-theme-wrapper-secondary.js.map