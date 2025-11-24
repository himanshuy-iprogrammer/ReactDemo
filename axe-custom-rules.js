// axe-custom-rules.js
export const rules = [
    {
        id: 'min-font-size',
        selector: '*',
        enabled: true,
        evaluate: (node) => {
            const style = window.getComputedStyle(node);
            if (!style.fontSize) return true; // ignore if no font size
            const fontSize = parseFloat(style.fontSize);
            return fontSize >= 14; // Minimum 14px
        },
        tags: ['custom', 'wcag2aa', 'text'],
        description: 'Ensure text has a minimum font size of 14px',
    }
];
