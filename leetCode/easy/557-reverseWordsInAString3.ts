import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function reverseWordsInAString3(s: string) {
  let left = 0;
  let right = 0;
  const len = s.length;
  const result = s.split("");

  for (let idx = 0; idx < len; idx += 1) {
    // find the space index
    const char = s[idx];
    if (char === " " || idx === len - 1) {
      // right is index before space
      // if char is space, then we reverse s[left : idx - 1]
      // if char is last character, then we reverse s[left : idx]
      right = idx === len - 1 ? idx : idx - 1;
      // swap the char
      while (left < right) {
        [result[left], result[right]] = [result[right], result[left]];
        left += 1;
        right -= 1;
      }
      // update left pointer which is idx + 1
      left = idx + 1;
    }
  }

  return result.join("");
}

// really a better way
function reverseWordsInAString3ii(s: string) {
  return s
    .split(" ")
    .reduce((result: string[], word) => {
      const reversed = word
        .split("")
        .reduceRight((acc, char) => (acc += char), "");
      result.push(reversed);

      return result;
    }, [])
    .join(" ");
}

console.log(reverseWordsInAString3ii("Let's take LeetCode contest"));

describe("reverseWordsInAString3ii", () => {
  it("1. should reverse the words in a string", () => {
    const s = "Let's take LeetCode contest";
    assertEquals(reverseWordsInAString3ii(s), "s'teL ekat edoCteeL tsetnoc");
  });

  it("2. should reverse the words in a string", () => {
    const s = "God Ding";
    assertEquals(reverseWordsInAString3ii(s), "doG gniD");
  });
});

// benchmark the functions using deno.bench
Deno.bench("reverseWordsInAString3ii", () => {
  reverseWordsInAString3ii("Let's take LeetCode contest");
});

Deno.bench("reverseWordsInAString3", () => {
  reverseWordsInAString3("Let's take LeetCode contest");
});
