// axe-custom-rules.js
module.exports = {
    'min-font-size': {
        meta: {
            type: 'accessibility',
            docs: {
                description: 'Ensure text has a minimum font size of 14px',
            },
            messages: {
                fail: 'Font size too small (<14px)',
            },
        },
        create: (context) => ({
            JSXOpeningElement(node) {
                // Check if style attribute exists
                const styleAttr = node.attributes.find(
                    attr => attr.name && attr.name.name === 'style'
                );

                if (styleAttr && styleAttr.value && styleAttr.value.expression?.properties) {
                    const fontProp = styleAttr.value.expression.properties.find(
                        p => p.key.name === 'fontSize'
                    );
                    if (fontProp) {
                        const fontValue = parseFloat(fontProp.value.value);
                        if (fontValue < 14) {
                            context.report({
                                node,
                                messageId: 'fail',
                            });
                        }
                    }
                }
            },
        }),
    },
};
