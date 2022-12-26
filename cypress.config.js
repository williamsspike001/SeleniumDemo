const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://demo.seleniumeasy.com",
    "defaultCommandTimeout": 8000,
    "pageLoadTimeout": 20000,
   "viewportHeight": 800,
   "viewportWidth": 1500,
  }
    });