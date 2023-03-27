"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MockDOMParser {
    parseFromString(xmlString, contentType) {
        const parser = new window.DOMParser();
        return parser.parseFromString(xmlString, contentType);
    }
}
exports.default = MockDOMParser;
//# sourceMappingURL=dom-parser-mock.js.map