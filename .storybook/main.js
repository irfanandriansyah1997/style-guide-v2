const path = require("path");

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
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
              sourceMap: true
          }
        },
        'postcss-loader'
      ]
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/atomic": path.resolve(__dirname, "../src/component/atomic/"),
      "@/molecules": path.resolve(__dirname, "../src/component/molecules/"),
      "@/organism": path.resolve(__dirname, "../src/component/organism/"),
      "@/helper": path.resolve(__dirname, "../src/utils/helper/"),
      "@/modules": path.resolve(__dirname, "../src/utils/modules/"),
      "@/constant": path.resolve(__dirname, "../src/utils/constant/"),
      "@/interface": path.resolve(__dirname, "../src/utils/interface/"),
      "@/assets": path.resolve(__dirname, "../src/assets/"),
      "@/utils": path.resolve(__dirname, "../src/utils/"),
      "@/style": path.resolve(__dirname, "../src/style/"),
      "@": path.resolve(__dirname, "../src/")
    };

    return config;
  },
};
