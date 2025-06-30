const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '19b6x1',
  e2e: {
    baseUrl: 'https://12go.asia/en',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
