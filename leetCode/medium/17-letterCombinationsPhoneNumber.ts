function letterCombinationsPhoneNumber(digits: string) {
  if (digits === "") return [];

  const t9Map = new Map([
    ["1", ""],
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
    ["0", " "],
  ]);

  const result: string[] = [];

  const helper = (index: number, str: string) => {
    if (index === digits.length) {
      result.push(str);
      return;
    }

    const letters = t9Map.get(digits[index]) ?? "0";
    for (let i = 0; i < letters.length; i += 1) {
      helper(index + 1, str + letters[i]);
    }
  };

  helper(0, "");

  return result;
}

console.log(letterCombinationsPhoneNumber("23"));
console.log(letterCombinationsPhoneNumber("234"));
console.log(letterCombinationsPhoneNumber("56435"));

/** 
 000
 001
 002
 010
 011
 012
 020
 021
 022 
 */
