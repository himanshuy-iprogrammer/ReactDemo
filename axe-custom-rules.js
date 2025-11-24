module.exports = [
    {
        id: 'min-font-size',
        selector: 'JSXOpeningElement',
        enabled: true,
        evaluate: (node, context) => {
            // Check for inline style prop
            const styleAttr = node.attributes?.find(
                (attr) => attr.name?.name === 'style'
            );
            if (styleAttr && styleAttr.value?.expression?.properties) {
                const fontProp = styleAttr.value.expression.properties.find(
                    (p) => p.key.name === 'fontSize'
                );
                if (fontProp && parseFloat(fontProp.value.value) < 14) {
                    return false; // fail if font size < 14
                }
            }
            return true; // pass if font size >= 14 or no style
        },
        tags: ['custom', 'wcag2aa', 'text'],
        description: 'Ensure all inline text has minimum font size of 14px',
    },
];
