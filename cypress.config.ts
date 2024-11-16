import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"https://digital.brochure.tkelevator.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
