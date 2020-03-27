export var toHitThreshold = function (target, toThreshold) {
    var stroke = target.stroke;
    var size = target.points.size.getLimit() + (stroke.enable ? stroke.width * stroke.align : 0);
    return (toThreshold ?
        toThreshold(size, 1) :
        size * 0.5);
};
//# sourceMappingURL=to-hit-threshold.js.map