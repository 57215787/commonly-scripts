
export function isHtmlElement(node: any): boolean {
    return node && node.nodeType === Node.ELEMENT_NODE;
}