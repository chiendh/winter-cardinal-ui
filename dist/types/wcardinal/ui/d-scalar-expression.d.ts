import { DScalar } from "./d-scalar";
declare const enum NodeType {
    OPEN = 0,
    CLOSE = 1,
    PARENSESIS = 2,
    ADD_OR_PLUS = 3,
    SUB_OR_MINUS = 4,
    PLUS = 5,
    MINUS = 6,
    ADD = 7,
    SUB = 8,
    MUL = 9,
    DIV = 10,
    MIN = 11,
    MAX = 12,
    COMMA = 13,
    PARENT = 14,
    SELF = 15,
    PADDING = 16,
    CURRENT = 17,
    NUMBER = 18
}
declare type NodeTypeOperator = NodeType.SUB_OR_MINUS | NodeType.ADD_OR_PLUS | NodeType.SUB | NodeType.ADD | NodeType.MUL | NodeType.DIV | NodeType.OPEN | NodeType.CLOSE | NodeType.MIN | NodeType.MAX | NodeType.COMMA;
declare type NodeTypeLiteral = NodeType.NUMBER | NodeType.PARENT | NodeType.SELF | NodeType.PADDING | NodeType.CURRENT;
declare type Token = NodeTypeOperator | [NodeTypeLiteral, number];
interface NodeOrTokenParensesis {
    [0]: NodeType.PARENSESIS;
    [1]: NodeOrToken[];
}
interface NodeOrTokenUnary {
    [0]: NodeType.PLUS | NodeType.MINUS;
    [1]: NodeOrToken;
}
declare type NodeArithmeticOperator = NodeType.SUB | NodeType.ADD | NodeType.MUL | NodeType.DIV;
interface NodeOrTokenArithmetic {
    [0]: NodeArithmeticOperator;
    [1]: NodeOrToken;
    [2]: NodeOrToken;
}
interface NodeOrTokenFunction {
    [0]: NodeType.MIN | NodeType.MAX;
    [1]: NodeOrToken[];
}
declare type NodeOrToken = Token | NodeOrTokenParensesis | NodeOrTokenUnary | NodeOrTokenArithmetic | NodeOrTokenFunction;
interface NodeLiteral {
    [0]: NodeTypeLiteral;
    [1]: number;
}
interface NodeParensesis {
    [0]: NodeType.PARENSESIS;
    [1]: Node[];
}
interface NodeUnary {
    [0]: NodeType.PLUS | NodeType.MINUS;
    [1]: Node;
}
interface NodeArithmetic {
    [0]: NodeArithmeticOperator;
    [1]: Node;
    [2]: Node;
}
interface NodeFunction {
    [0]: NodeType.MIN | NodeType.MAX;
    [1]: Node[];
}
declare type Node = NodeParensesis | NodeUnary | NodeArithmetic | NodeFunction | NodeLiteral;
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
export declare class DScalarExpression implements DScalar {
    protected static TOKEN_REGEX: RegExp;
    protected _node: Node;
    constructor(expression: string);
    toParensesis(nodes: NodeOrToken[], ifrom: number): number;
    toCommaOf(nodes: NodeOrToken[], ifrom: number, ito: number): NodeOrToken;
    toComma(nodes: NodeOrToken[], ifrom: number, ito: number): NodeOrToken[];
    toUnaryNode(node: NodeOrToken): void;
    toUnary(nodes: NodeOrToken[]): void;
    toArithmeticNode(node: NodeOrToken, operatorA: NodeArithmeticOperator, operatorB: NodeArithmeticOperator): void;
    toArithmetic(nodes: NodeOrToken[], operatorA: NodeArithmeticOperator, operatorB: NodeArithmeticOperator): void;
    toToken(expression: string): Token[];
    protected evaluate(node: Node, parent: number, self: number, padding: number, current: number): number;
    calculate(parent: number, self: number, padding: number, current: number): number;
}
export {};
