var DTableDataListMapped = /** @class */ (function () {
    function DTableDataListMapped(parent) {
        this._parent = parent;
    }
    DTableDataListMapped.prototype.map = function (unmappedIndex) {
        var parent = this._parent;
        var sortedIndex = parent.sorter.map(unmappedIndex);
        if (sortedIndex != null) {
            return parent.filter.map(sortedIndex);
        }
        return null;
    };
    DTableDataListMapped.prototype.unmap = function (index) {
        var parent = this._parent;
        return parent.sorter.unmap(parent.filter.unmap(index));
    };
    DTableDataListMapped.prototype.size = function () {
        var parent = this._parent;
        var indicesFiltered = parent.filter.indices;
        return (indicesFiltered != null ? indicesFiltered.length : parent.size());
    };
    DTableDataListMapped.prototype.get = function (index) {
        var parent = this._parent;
        return parent.get(this.unmap(index));
    };
    DTableDataListMapped.prototype.each = function (iteratee, ifrom, ito) {
        var parent = this._parent;
        var rows = parent.rows;
        var supplimentals = parent.supplimentals;
        var indicesFiltered = parent.filter.indices;
        var indicesSorted = parent.sorter.indices;
        ifrom = (ifrom != null ? Math.max(0, ifrom) : 0);
        if (indicesFiltered) {
            var size = indicesFiltered.length;
            ito = (ito != null ? Math.min(size, ito) : size);
            if (indicesSorted) {
                for (var i = ifrom; i < ito; ++i) {
                    var unmappedIndex = indicesSorted[indicesFiltered[i]];
                    var row = rows[unmappedIndex];
                    var supplimental = (supplimentals ? supplimentals[unmappedIndex] : null);
                    if (iteratee(row, supplimental, i, unmappedIndex) === false) {
                        break;
                    }
                }
            }
            else {
                for (var i = ifrom; i < ito; ++i) {
                    var unmappedIndex = indicesFiltered[i];
                    var row = rows[unmappedIndex];
                    var supplimental = (supplimentals ? supplimentals[unmappedIndex] : null);
                    if (iteratee(row, supplimental, i, unmappedIndex) === false) {
                        break;
                    }
                }
            }
        }
        else {
            var size = rows.length;
            ito = (ito != null ? Math.min(size, ito) : size);
            if (indicesSorted) {
                for (var i = ifrom; i < ito; ++i) {
                    var unmappedIndex = indicesSorted[i];
                    var row = rows[unmappedIndex];
                    var supplimental = (supplimentals ? supplimentals[unmappedIndex] : null);
                    if (iteratee(row, supplimental, i, unmappedIndex) === false) {
                        break;
                    }
                }
            }
            else {
                for (var i = ifrom; i < ito; ++i) {
                    var row = rows[i];
                    var supplimental = (supplimentals ? supplimentals[i] : null);
                    if (iteratee(row, supplimental, i, i) === false) {
                        break;
                    }
                }
            }
        }
    };
    return DTableDataListMapped;
}());
export { DTableDataListMapped };
//# sourceMappingURL=d-table-data-list-mapped.js.map