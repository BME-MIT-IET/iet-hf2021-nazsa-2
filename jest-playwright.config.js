module.exports = {
  serverOptions: {
    command: "next start -p 3000",
    port: 3000,
  },
  browsers: ["chromium"],
  // make sure to only enalbe these on development on local machine
  launchOptions: {
    headless: false,
    slowMo: 500,
  },
};
