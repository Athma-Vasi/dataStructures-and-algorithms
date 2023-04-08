import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function validParentheses(s: string): boolean {
  const openingParens = new Set<string>(["(", "{", "["]);
  const closingParens = new Set<string>([")", "}", "]"]);
  const parensMap = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  const sanitizedStr: string[] = s
    .split("")
    .filter((char) => openingParens.has(char) || closingParens.has(char));

  const stack: string[] = [];

  return (
    sanitizedStr.reduce((acc, char) => {
      if (openingParens.has(char)) stack.push(char);
      else {
        // if stack is empty when curr char is a closing parens, assymetrical parens so not valid
        if (stack.length === 0) acc = false;

        // if char is a closing parens
        if (closingParens.has(char)) {
          const complementParen = parensMap.get(char);
          if (stack.at(-1) !== complementParen) acc = false;
        }

        stack.pop();
      }

      return acc;
    }, true) && stack.length === 0
  );
}

console.log(validParentheses("{[]}"));

export { validParentheses };

describe("validParentheses", () => {
  it("1. should return true if the string is valid", () => {
    const s = "()";
    assertEquals(validParentheses(s), true);
  });

  it("2. should return true if the string is valid", () => {
    const s = "()[]{}";
    assertEquals(validParentheses(s), true);
  });

  it("3. should return false if the string is not valid", () => {
    const s = "(]";
    assertEquals(validParentheses(s), false);
  });

  it("4. should return false if the string is not valid", () => {
    const s = "([)]";
    assertEquals(validParentheses(s), false);
  });

  it("5. should return true if the string is valid", () => {
    const s = "{[]}";
    assertEquals(validParentheses(s), true);
  });

  it("6. should return false if the string is not valid", () => {
    const s = "((";
    assertEquals(validParentheses(s), false);
  });

  it("7. should return false if the string is not valid", () => {
    const s = "){";
    assertEquals(validParentheses(s), false);
  });
});
