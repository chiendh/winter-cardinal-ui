var DChartCoordinateTransformMarkImpl = /** @class */ (function () {
    function DChartCoordinateTransformMarkImpl() {
        this.oldTranslate = 0;
        this.oldScale = 1;
        this.newTranslate = 0;
        this.newScale = 1;
    }
    DChartCoordinateTransformMarkImpl.prototype.set = function (translate, scale) {
        if (translate != null) {
            this.newTranslate = translate;
        }
        if (scale != null) {
            this.newScale = scale;
        }
    };
    return DChartCoordinateTransformMarkImpl;
}());
export { DChartCoordinateTransformMarkImpl };
//# sourceMappingURL=d-chart-coordinate-transform-mark.js.map