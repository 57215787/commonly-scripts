export function isHtmlElement(node: any): node is HTMLElement {
    return node && node.nodeType === Node.ELEMENT_NODE;
}
