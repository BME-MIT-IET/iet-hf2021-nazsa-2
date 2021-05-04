import handler from "lib/api/handler";

describe("Handler", () => {
  it("should throw error, if bad argument given", () => {
    expect(() => {
      handler({ GTE: () => {} });
    }).toThrow("Invalid method in mapping");
  });
});
