const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://12go.asia/en',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
