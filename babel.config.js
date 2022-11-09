module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                    alias: {
                        "@assets": "./src/assets",
                        "@Components": "./src/Components",
                        "@Config": "./src/Config",
                        "@Hooks": "./src/Hooks",
                        "@Screens": "./src/Screens",
                        "@Styles": "./src/Styles",
                        "@Utils": "./src/Utils",
                    },
                },
            ],
        ],
    };
};

