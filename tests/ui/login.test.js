import dotenv from "dotenv";
dotenv.config();

describe("Login flow", () => {
  it("It should allow users to log in", async () => {
    await page.goto("http://localhost:3000/belepes");
    await page.click("text=Belépés AuthSCH fiókkal");
    await page.fill("#LoginForm_username", process.env.TEST_OAUTH_USERNAME);
    await page.fill("#LoginForm_password", process.env.TEST_OAUTH_PASSWORD);
    await page.click("text=Bejelentkezés");
    expect(await page.url()).toBe("http://localhost:3000/");
  });
});
