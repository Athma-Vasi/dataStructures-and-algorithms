import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function numberOfSeniorCitizens(details: string[]) {
  return details.reduce((acc: number, detail) => {
    const genderAgeSeat = detail.slice(11);
    const age = Number(genderAgeSeat.slice(0, 2));
    age > 60 ? (acc += 1) : acc;

    return acc;
  }, 0);
}

export { numberOfSeniorCitizens };

describe("numberOfSeniorCitizens", () => {
  it("1. should return the number of senior citizens older than 60", () => {
    const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];
    assertEquals(numberOfSeniorCitizens(details), 2);
  });

  it("2. should return the number of senior citizens older than 60", () => {
    const details = ["1313579440F2036", "2921522980M5644"];
    assertEquals(numberOfSeniorCitizens(details), 0);
  });
});
