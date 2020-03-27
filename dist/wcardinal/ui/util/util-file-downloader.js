/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var UtilFileDownloader = /** @class */ (function () {
    function UtilFileDownloader() {
    }
    UtilFileDownloader.downloadUrl = function (filename, url) {
        var a = document.createElement("a");
        if ("download" in a) {
            a.href = url;
            a.setAttribute("download", filename);
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
            }, 66);
        }
        else {
            if (!window.open(url)) {
                location.href = url;
            }
        }
    };
    UtilFileDownloader.download = function (filename, contents) {
        var blob = new Blob([contents], { type: "text/plain" });
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, filename);
        }
        else {
            this.downloadUrl(filename, URL.createObjectURL(blob));
        }
    };
    return UtilFileDownloader;
}());
export { UtilFileDownloader };
//# sourceMappingURL=util-file-downloader.js.map