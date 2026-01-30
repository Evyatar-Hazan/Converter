function xmlToJson(xmlString) {
    if (typeof xmlString !== 'string') {
        throw new Error('XML input must be a string.');
    }
    let xml;
    try {
        xml = new window.DOMParser().parseFromString(xmlString, 'application/xml');
    } catch (e) {
        throw new Error('Invalid XML format.');
    }
    if (xml.getElementsByTagName('parsererror').length > 0) {
        throw new Error('Invalid XML format.');
    }
    const obj = domToJson(xml.documentElement);
    return JSON.stringify(obj, null, 2);
}
function domToJson(node) {
    if (node.nodeType === 3) {
        return node.nodeValue.trim();
    }
    if (node.nodeType === 4) {
        return node.nodeValue;
    }
    const obj = {};
    if (node.attributes && node.attributes.length > 0) {
        for (let i = 0; i < node.attributes.length; i++) {
            obj[`@${node.attributes[i].name}`] = node.attributes[i].value;
        }
    }
    let hasElementChild = false;
    for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType === 1) {
            hasElementChild = true;
            break;
        }
    }
    if (!hasElementChild && node.childNodes.length === 1 && node.childNodes[0].nodeType === 3) {
        return node.childNodes[0].nodeValue.trim();
    }
    for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes[i];
        if (child.nodeType === 1) {
            const key = child.nodeName;
            const value = domToJson(child);
            if (obj.hasOwnProperty(key)) {
                if (!Array.isArray(obj[key])) {
                    obj[key] = [obj[key]];
                }
                obj[key].push(value);
            } else {
                obj[key] = value;
            }
        }
    }
    return obj;
}
