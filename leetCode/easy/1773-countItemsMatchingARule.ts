import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function countItemsMatchingARule(
  items: string[][],
  ruleKey: string,
  ruleValue: string
) {
  const ruleMap = new Map<string, number>([
    ["type", 0],
    ["color", 1],
    ["name", 2],
  ]);

  const idxOfRule = ruleMap.get(ruleKey);

  return items.reduce((count: number, item: string[]) => {
    if (idxOfRule !== undefined)
      item[idxOfRule] === ruleValue ? (count += 1) : count;

    return count;
  }, 0);
}

export { countItemsMatchingARule };

describe("countItemsMatchingARule", () => {
  it("1. should return the number of items that match the rule", () => {
    const items = [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ];
    const ruleKey = "color";
    const ruleValue = "silver";
    assertEquals(countItemsMatchingARule(items, ruleKey, ruleValue), 1);
  });

  it("2. should return the number of items that match the rule", () => {
    const items = [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ];
    const ruleKey = "type";
    const ruleValue = "phone";
    assertEquals(countItemsMatchingARule(items, ruleKey, ruleValue), 2);
  });
});
