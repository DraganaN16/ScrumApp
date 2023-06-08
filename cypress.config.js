const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://vivifyscrum-stage.com/",
    env: {
      existingUserEmail: "draganaaa@gmail.com",
      validPassword: "pokusavam100", 
      baseApiUrl:"https://api.vivifyscrum-stage.com/api/",
      boardName: "Proba",
      editedBoardName: "Novo ime",
      boardDescription: "proba"

    }
  },
});
