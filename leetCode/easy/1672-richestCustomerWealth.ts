import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function richestCustomerWealth(accounts: Array<number[]>) {
  return accounts.reduce((richestWealth: number, customer: number[]) => {
    const wealth = customer.reduce((wealth, money) => (wealth += money), 0);
    richestWealth = Math.max(wealth, richestWealth);

    return richestWealth;
  }, 0);
}

export { richestCustomerWealth };

describe("richestCustomerWealth", () => {
  it("1. should return the richest customer's wealth", () => {
    const accounts = [
      [1, 2, 3],
      [3, 2, 1],
    ];
    assertEquals(richestCustomerWealth(accounts), 6);
  });

  it("2. should return the richest customer's wealth", () => {
    const accounts = [
      [1, 5],
      [7, 3],
      [3, 5],
    ];
    assertEquals(richestCustomerWealth(accounts), 10);
  });

  it("3. should return the richest customer's wealth", () => {
    const accounts = [
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ];
    assertEquals(richestCustomerWealth(accounts), 17);
  });
});
