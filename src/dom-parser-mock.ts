export default class MockDOMParser {
  parseFromString(xmlString: string, contentType: any): Document {
    const parser = new window.DOMParser();
    return parser.parseFromString(xmlString, contentType);
  }
}
