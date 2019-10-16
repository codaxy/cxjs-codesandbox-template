module.exports = {
    cacheDirectory: true,
    cacheIdentifier: "v1",
    presets: [
        [
            "cx-env",
            {
                targets: {
                    chrome: 50,
                    ie: 11,
                    firefox: 50,
                    edge: 12,
                    safari: 9
                },
                modules: false,
                loose: true,
                useBuiltIns: 'usage',
                corejs: 3,
                cx: {
                    imports: {
                        useSrc: true
                    }
                }
            }
        ]
    ],
    plugins: []
};
