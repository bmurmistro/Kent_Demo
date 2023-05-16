const { defineConfig } = require("cypress");
const webpackConfig = require("./cypress/webpack.config");

module.exports = defineConfig({
  projectId: "xowi6h",
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig,
    },
    specPattern: "__component_tests__/**/*.cy.{js,ts}",
  },
});

require("@applitools/eyes-cypress")(module);
