import { QuestionSchema } from "lib/schemas";

describe("schemas", () => {
  describe("question", () => {
    it("should correctly validate topics", async () => {
      const options = {
        abortEarly: false,
      };

      const rest = {
        title: "title",
        body: "body",
      };

      const minError = {
        ...rest,
        topics: [],
      };

      const maxError = {
        ...rest,
        topics: ["topic1", "topic2", "topic3", "topic4", "topic5", "topic6"],
      };

      const valid = {
        ...rest,
        topics: ["topic"],
      };

      await expect(QuestionSchema.validate(rest, options)).rejects.toThrow(
        "Témát is tessék választani"
      );
      await expect(QuestionSchema.validate(minError, options)).rejects.toThrow(
        "Legalább egy témát adj meg"
      );
      await expect(QuestionSchema.validate(maxError, options)).rejects.toThrow(
        "Maximum 5 témát választhatsz"
      );
      await expect(QuestionSchema.validate(valid, options)).resolves.toBe(
        valid
      );
    });
  });
});
