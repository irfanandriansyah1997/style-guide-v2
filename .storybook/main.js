const path = require("path");

import '../src/style/global.scss';

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "storybook-dark-mode",
    "@storybook/addon-viewport"
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ]
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/helper": path.resolve(__dirname, "../src/library/helper/"),
      "@/modules": path.resolve(__dirname, "../src/library/modules/"),
      "@/assets": path.resolve(__dirname, "../src/assets/"),
      "@/library": path.resolve(__dirname, "../src/library/"),
      "@/pages": path.resolve(__dirname, "../src/pages/"),
      "@/routing": path.resolve(__dirname, "../src/routing/"),
      "@/style": path.resolve(__dirname, "../src/style/"),
      "@": path.resolve(__dirname, "../src/")
    };

    return config;
  },
};
