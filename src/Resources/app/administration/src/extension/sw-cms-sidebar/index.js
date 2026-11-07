
import template from './sw-cms-sidebar.html.twig';

Shopware.Component.override('sw-cms-sidebar', {
    template,

    methods: {
        onSecBodyClassesChange(secValue) {
            this.page.customFields = {
                ...(this.page.customFields || {}),
                secBodyClasses: secValue,
            };
        },
    },
});
