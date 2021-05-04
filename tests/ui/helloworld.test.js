describe("asd", () => {
  it("sdfdsf", async () => {
    await page.goto("http://whatsmyuseragent.org/");
    await page.screenshot({ path: `example.png` });
    expect(true).toBe(true);
  });
});
