/**
 * @type {import('@docgeni/core').DocgeniConfig}
 */
module.exports = {
    mode: 'lite',
    title: 'test-workspace',
    description: '',
    docsDir: 'docs',
    navs: [
        null,
        {
            title: 'Components',
            path: 'components',
            lib: 'test-lib',
            locales: {}
        }
    ],
    libs: [
        {
            name: 'test-lib',
            rootDir: 'projects/test-lib',
            include: [
                'src',
                'src/components',
            ],
            exclude: [
                'src/exclude'
            ],
            apiMode: 'automatic',
            categories: []
        }
    ]
};
