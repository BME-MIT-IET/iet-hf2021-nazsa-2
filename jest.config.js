module.exports = {
  verbose: true,
  projects: [
    {
      displayName: "unit",
      testMatch: ["<rootDir>/tests/unit/*/.test.js"],
      moduleDirectories: ["node_modules", "src"],
    },
    {
      displayName: "ui",
      testMatch: ["<rootDir>/tests/ui/*/.test.js"],
      moduleDirectories: ["node_modules", "src"],
      preset: "jest-playwright-preset",
    },
  ],
};
