import dotenv from "dotenv";
dotenv.config();

jest.setTimeout(1000 * 60 * 5);

beforeAll(async () => {
  await page.goto("http://localhost:3000/belepes");
  await page.click("text=Belépés AuthSCH fiókkal");
  await page.fill("#LoginForm_username", process.env.TEST_OAUTH_USERNAME);
  await page.fill("#LoginForm_password", process.env.TEST_OAUTH_PASSWORD);
  await page.click("text=Bejelentkezés");
  if ((await page.url()) !== "http://localhost:3000/") {
    await page.click("text=Engedélyezés");
  }
});

describe("Login flow", () => {
  it("It should post a new question", async () => {
    await page.click("#test-new-question");
    expect(await page.url()).toBe("http://localhost:3000/uj");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.type("cim");
    await page.keyboard.press("Tab");
    await page.keyboard.type("torzs");
    await page.keyboard.press("Tab");
    await page.keyboard.type("iet");
    await page.keyboard.press("Tab");
    await page.click("text=Küldés");
    expect(page).toHaveSelector("text=cim");
    expect(page).toHaveSelector("text=torzs");

    const url = await page.url();
    let tmp = url.split("/");
    tmp.pop();
    let final = tmp.join("/");
    expect(final).toBe("http://localhost:3000/kerdes");
    ///data-test -> await page.click('[data-test="editQuestionButton"]');
  });
});
