module.exports = {
    verbose: true,
    projects: [
      {
        displayName: "unit",
        testMatch: ["<rootDir>/tests/unit/*/.test.js"],
        moduleDirectories: ["node_modules", "src"],
      },
    ],
  };