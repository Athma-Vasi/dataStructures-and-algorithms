import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function goalParserInterpretation(command: string) {
  // return command.replaceAll("()", "o").replaceAll("(al)", "al");
  return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
}

export { goalParserInterpretation };

describe("goalParserInterpretation", () => {
  it("1. should return the interpreted string", () => {
    const command = "G()(al)";
    assertEquals(goalParserInterpretation(command), "Goal");
  });

  it("2. should return the interpreted string", () => {
    const command = "G()()()()(al)";
    assertEquals(goalParserInterpretation(command), "Gooooal");
  });

  it("3. should return the interpreted string", () => {
    const command = "(al)G(al)()()G";
    assertEquals(goalParserInterpretation(command), "alGalooG");
  });
});
