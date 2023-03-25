"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringify_1 = __importDefault(require("../stringify"));
test('toLowerCase', () => {
    expect(stringify_1.default.toLowerCase('Carl')).toBe('carl');
});
