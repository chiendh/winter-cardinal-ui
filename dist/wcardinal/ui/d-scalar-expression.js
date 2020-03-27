/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isNumber } from "./util/is-number";
var NodeType;
(function (NodeType) {
    // Parensesis
    NodeType[NodeType["OPEN"] = 0] = "OPEN";
    NodeType[NodeType["CLOSE"] = 1] = "CLOSE";
    NodeType[NodeType["PARENSESIS"] = 2] = "PARENSESIS";
    // Operations
    NodeType[NodeType["ADD_OR_PLUS"] = 3] = "ADD_OR_PLUS";
    NodeType[NodeType["SUB_OR_MINUS"] = 4] = "SUB_OR_MINUS";
    NodeType[NodeType["PLUS"] = 5] = "PLUS";
    NodeType[NodeType["MINUS"] = 6] = "MINUS";
    NodeType[NodeType["ADD"] = 7] = "ADD";
    NodeType[NodeType["SUB"] = 8] = "SUB";
    NodeType[NodeType["MUL"] = 9] = "MUL";
    NodeType[NodeType["DIV"] = 10] = "DIV";
    // Functions
    NodeType[NodeType["MIN"] = 11] = "MIN";
    NodeType[NodeType["MAX"] = 12] = "MAX";
    NodeType[NodeType["COMMA"] = 13] = "COMMA";
    // Literals
    NodeType[NodeType["PARENT"] = 14] = "PARENT";
    NodeType[NodeType["SELF"] = 15] = "SELF";
    NodeType[NodeType["PADDING"] = 16] = "PADDING";
    NodeType[NodeType["CURRENT"] = 17] = "CURRENT";
    NodeType[NodeType["NUMBER"] = 18] = "NUMBER";
})(NodeType || (NodeType = {}));
var TOKEN_MAPPING_OPERATOR = {
    "+": 3 /* ADD_OR_PLUS */,
    "-": 4 /* SUB_OR_MINUS */,
    "*": 9 /* MUL */,
    "/": 10 /* DIV */,
    "(": 0 /* OPEN */,
    ")": 1 /* CLOSE */,
    ",": 13 /* COMMA */,
    "min": 11 /* MIN */,
    "max": 12 /* MAX */
};
var TOKEN_MAPPING_LITERAL = {
    "%": 14 /* PARENT */,
    "s": 15 /* SELF */,
    "p": 16 /* PADDING */,
    "c": 17 /* CURRENT */
};
/**
 * Parser and evaluator of the scalar expressions like `100% - 50s`.
 *
 * Literals
 *
 * * x%: 0.01 * x * parent value
 * * xs: 0.01 * x * self value
 * * xp: 0.01 * x * padding value
 * * xc: 0.01 * x * current value
 *
 * Operators
 *
 * * `+`
 * * `-`
 * * `*`
 * * `/`
 * * `(` and `)`
 *
 * Functions
 *
 * * min( a, b, ... )
 * * max( a, b, ... )
 *
 * Examples
 *
 * * `90%`: 0.9 * parent value
 * * `50s`: 0.5 * self value
 * * `90% - 50s`: 0.9 * parent value - 0.5 * self value
 * * `90% - (50s + 100) * 2`: 0.9 * parent value - ( 0.5 * self value + 100 ) * 2
 */
var DScalarExpression = /** @class */ (function () {
    function DScalarExpression(expression) {
        var nodes = this.toToken(expression);
        var i = 0;
        do {
            i = this.toParensesis(nodes, i);
        } while (i < nodes.length);
        this.toUnary(nodes);
        this.toArithmetic(nodes, 9 /* MUL */, 10 /* DIV */);
        this.toArithmetic(nodes, 7 /* ADD */, 8 /* SUB */);
        if (nodes.length === 1) {
            var node = nodes[0];
            if (!isNumber(node)) {
                this._node = node;
                return;
            }
        }
        throw new Error("Failed to parse '" + expression + "'");
    }
    DScalarExpression.prototype.toParensesis = function (nodes, ifrom) {
        var ito = nodes.length;
        for (var i = ifrom; i < ito; ++i) {
            var inode = nodes[i];
            if (inode === 0 /* OPEN */) {
                var istart = i;
                var nodeType = 2 /* PARENSESIS */;
                if (0 < i) {
                    var nodeTypePrev = nodes[i - 1];
                    if (nodeTypePrev === 11 /* MIN */ || nodeTypePrev === 12 /* MAX */) {
                        istart -= 1;
                        nodeType = nodeTypePrev;
                    }
                }
                for (var j = i + 1; j < ito; ++j) {
                    var jnode = nodes[j];
                    if (jnode === 1 /* CLOSE */) {
                        nodes[istart] = [nodeType, this.toComma(nodes, i + 1, j)];
                        nodes.splice(istart + 1, j - istart);
                        return istart + 1;
                    }
                    else if (jnode === 0 /* OPEN */) {
                        j = this.toParensesis(nodes, j) - 1;
                        ito = nodes.length;
                    }
                }
                throw new Error("Malformed parensesis");
            }
        }
        return ito;
    };
    DScalarExpression.prototype.toCommaOf = function (nodes, ifrom, ito) {
        var l = ito - ifrom;
        if (l <= 0) {
            return [18 /* NUMBER */, 0];
        }
        else if (l <= 1) {
            return nodes[ifrom];
        }
        else {
            var operand = [];
            for (var j = ifrom; j < ito; ++j) {
                operand.push(nodes[j]);
            }
            return [2 /* PARENSESIS */, operand];
        }
    };
    DScalarExpression.prototype.toComma = function (nodes, ifrom, ito) {
        var result = null;
        var iprev = ifrom;
        for (var i = ifrom; i < ito; ++i) {
            var node = nodes[i];
            if (node === 13 /* COMMA */) {
                result = result || [];
                result.push(this.toCommaOf(nodes, iprev, i));
                iprev = i + 1;
            }
        }
        if (iprev < ito) {
            if (result == null) {
                var operand = [];
                for (var i = iprev; i < ito; ++i) {
                    operand.push(nodes[i]);
                }
                return operand;
            }
            else {
                result.push(this.toCommaOf(nodes, iprev, ito));
            }
        }
        return result || [];
    };
    DScalarExpression.prototype.toUnaryNode = function (node) {
        if (!isNumber(node)) {
            if (node[0] === 2 /* PARENSESIS */ ||
                node[0] === 11 /* MIN */ ||
                node[0] === 12 /* MAX */) {
                this.toUnary(node[1]);
            }
        }
    };
    DScalarExpression.prototype.toUnary = function (nodes) {
        for (var i = 0, imax = nodes.length; i < imax; ++i) {
            var node = nodes[i];
            if (node === 3 /* ADD_OR_PLUS */ || node === 4 /* SUB_OR_MINUS */) {
                if (i <= 0 || isNumber(nodes[i - 1])) {
                    if (i + 1 < imax && !isNumber(nodes[i + 1])) {
                        var operand = nodes.splice(i + 1, 1)[0];
                        var type = (node === 3 /* ADD_OR_PLUS */ ? 5 /* PLUS */ : 6 /* MINUS */);
                        nodes[i] = [type, operand];
                        imax = nodes.length;
                        this.toUnaryNode(operand);
                    }
                    else {
                        throw new Error("Malformed unary operator");
                    }
                }
                else {
                    var type = (node === 3 /* ADD_OR_PLUS */ ? 7 /* ADD */ : 8 /* SUB */);
                    nodes[i] = type;
                }
            }
            else {
                this.toUnaryNode(node);
                imax = nodes.length;
            }
        }
    };
    DScalarExpression.prototype.toArithmeticNode = function (node, operatorA, operatorB) {
        if (!isNumber(node)) {
            if (node[0] === 2 /* PARENSESIS */ || node[0] === 11 /* MIN */ || node[0] === 12 /* MAX */) {
                this.toArithmetic(node[1], operatorA, operatorB);
            }
            else if (node[0] === 5 /* PLUS */ || node[0] === 6 /* MINUS */) {
                this.toArithmeticNode(node[1], operatorA, operatorB);
            }
            else if (node[0] === 7 /* ADD */ || node[0] === 8 /* SUB */ ||
                node[0] === 9 /* MUL */ || node[0] === 10 /* DIV */) {
                this.toArithmeticNode(node[1], operatorA, operatorB);
                this.toArithmeticNode(node[2], operatorA, operatorB);
            }
        }
    };
    DScalarExpression.prototype.toArithmetic = function (nodes, operatorA, operatorB) {
        for (var i = 0, imax = nodes.length; i < imax; ++i) {
            var node = nodes[i];
            if (node === operatorA || node === operatorB) {
                if (0 < i && i + 1 < imax) {
                    var left = nodes[i - 1];
                    var right = nodes[i + 1];
                    if (!isNumber(left) && !isNumber(right)) {
                        nodes.splice(i, 2);
                        nodes[i - 1] = [node, left, right];
                        i -= 1;
                        imax = nodes.length;
                        this.toArithmeticNode(left, operatorA, operatorB);
                        this.toArithmeticNode(right, operatorA, operatorB);
                        continue;
                    }
                }
                throw new Error("Malformed operands for the operator " + node);
            }
            else {
                this.toArithmeticNode(node, operatorA, operatorB);
                imax = nodes.length;
            }
        }
    };
    DScalarExpression.prototype.toToken = function (expression) {
        var tokens = [];
        while (true) {
            var matched = DScalarExpression.TOKEN_REGEX.exec(expression);
            if (matched != null) {
                var token = matched[0];
                var tokenTypeOperator = TOKEN_MAPPING_OPERATOR[token];
                if (tokenTypeOperator != null) {
                    tokens.push(tokenTypeOperator);
                }
                else {
                    var parsedToken = parseFloat(token);
                    if (parsedToken !== parsedToken) {
                        throw new Error("Unexpected token '" + token + "' at " + matched.index + " in '" + expression + "'");
                    }
                    var tokenTypeLiteral = TOKEN_MAPPING_LITERAL[token[token.length - 1]];
                    if (tokenTypeLiteral != null) {
                        tokens.push([tokenTypeLiteral, parsedToken * 0.01]);
                    }
                    else {
                        tokens.push([18 /* NUMBER */, parsedToken]);
                    }
                }
            }
            else {
                break;
            }
        }
        return tokens;
    };
    DScalarExpression.prototype.evaluate = function (node, parent, self, padding, current) {
        switch (node[0]) {
            case 2 /* PARENSESIS */:
                var nodes = node[1];
                return this.evaluate(nodes[nodes.length - 1], parent, self, padding, current);
            // Unary operators
            case 5 /* PLUS */:
                return +this.evaluate(node[1], parent, self, padding, current);
            case 6 /* MINUS */:
                return -this.evaluate(node[1], parent, self, padding, current);
            // Four arithmetic operators
            case 7 /* ADD */:
                return this.evaluate(node[1], parent, self, padding, current) +
                    this.evaluate(node[2], parent, self, padding, current);
            case 8 /* SUB */:
                return this.evaluate(node[1], parent, self, padding, current) -
                    this.evaluate(node[2], parent, self, padding, current);
            case 9 /* MUL */:
                return this.evaluate(node[1], parent, self, padding, current) *
                    this.evaluate(node[2], parent, self, padding, current);
            case 10 /* DIV */:
                return this.evaluate(node[1], parent, self, padding, current) /
                    this.evaluate(node[2], parent, self, padding, current);
            // Functions
            case 11 /* MIN */:
                if (0 < node[1].length) {
                    var args = node[1];
                    var result = this.evaluate(args[0], parent, self, padding, current);
                    for (var i = 1, imax = args.length; i < imax; ++i) {
                        result = Math.min(result, this.evaluate(args[i], parent, self, padding, current));
                    }
                    return result;
                }
                return 0;
            case 12 /* MAX */:
                if (0 < node[1].length) {
                    var args = node[1];
                    var result = this.evaluate(args[0], parent, self, padding, current);
                    for (var i = 1, imax = args.length; i < imax; ++i) {
                        result = Math.max(result, this.evaluate(args[i], parent, self, padding, current));
                    }
                    return result;
                }
                return 0;
            // Literals
            case 14 /* PARENT */:
                return node[1] * parent;
            case 15 /* SELF */:
                return node[1] * self;
            case 16 /* PADDING */:
                return node[1] * padding;
            case 17 /* CURRENT */:
                return node[1] * current;
            case 18 /* NUMBER */:
                return node[1];
        }
        return 0;
    };
    DScalarExpression.prototype.calculate = function (parent, self, padding, current) {
        return this.evaluate(this._node, parent, self, padding, current);
    };
    DScalarExpression.TOKEN_REGEX = /(?:\+|-|\*|\/|\(|\)|min|max|,|(?:\d+(?:\.\d*)?[%psc]?))/g;
    return DScalarExpression;
}());
export { DScalarExpression };
//# sourceMappingURL=d-scalar-expression.js.map