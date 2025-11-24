module.exports = {
    'min-font-size': {
        meta: { type: 'accessibility' },
        create: (context) => ({
            JSXOpeningElement(node) {
                const styleAttr = node.attributes.find(attr => attr.name?.name === 'style');
                if (styleAttr?.value?.expression?.properties) {
                    const fontProp = styleAttr.value.expression.properties.find(p => p.key.name === 'fontSize');
                    if (fontProp && parseFloat(fontProp.value.value) < 14) {
                        context.report({ node, message: 'Font size too small (<14px)' });
                    }
                }
            },
        }),
    },
};
