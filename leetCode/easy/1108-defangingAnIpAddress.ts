import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function defangingIpAddress(address: string) {
  return address
    .split(".")
    .reduce((acc: string[], char) => {
      acc.push(char);
      acc.push("[.]");

      return acc;
    }, [])
    .slice(0, -1)
    .join("");
}

export { defangingIpAddress };

describe("defangingIpAddress", () => {
  it("1. should return the defanged ip address", () => {
    const address = "1.1.1.1";
    assertEquals(defangingIpAddress(address), "1[.]1[.]1[.]1");
  });
});
