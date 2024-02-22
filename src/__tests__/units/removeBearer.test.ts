import { removeBearer } from "../..";

describe("Unit Test: Remove Bearer Function", () => {
  test("Should be able to remove the 'Bearer' word from a string", () => {
    const result = removeBearer("Bearerabacate");
    expect(result).toBe("abacate");
  });

  test("Should be able to remove 'Bearer' with a space", () => {
    const result = removeBearer("Bearer lkdfgnm34908jfgosdlfjmw30fj");
    expect(result).toBe("lkdfgnm34908jfgosdlfjmw30fj");
  });
});