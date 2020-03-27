var EShapeImageElements = /** @class */ (function () {
    function EShapeImageElements() {
    }
    EShapeImageElements.toImageElement = function (dataUrl) {
        var imageElements = EShapeImageElements.imageElements;
        var cachedImageElement = imageElements[dataUrl];
        if (cachedImageElement != null) {
            if (cachedImageElement instanceof HTMLImageElement) {
                return Promise.resolve(cachedImageElement);
            }
            else {
                return cachedImageElement;
            }
        }
        else {
            var result = new Promise(function (resolve, reject) {
                var imageElement = document.createElement("img");
                imageElement.onload = function () {
                    imageElements[dataUrl] = imageElement;
                    resolve(imageElement);
                };
                imageElement.onabort = imageElement.onerror = function () {
                    reject();
                };
                imageElement.src = dataUrl;
            });
            imageElements[dataUrl] = result;
            return result;
        }
    };
    EShapeImageElements.imageElements = {};
    return EShapeImageElements;
}());
export { EShapeImageElements };
//# sourceMappingURL=e-shape-image-elements.js.map