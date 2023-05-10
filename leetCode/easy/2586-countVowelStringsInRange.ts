function countVowelStringsInRange(
  words: string[],
  left: number,
  right: number
) {
  const vowelSet = new Set<string>("aeiou");
  let counter = 0;

  for (let start = left; start <= right; start += 1) {
    const word = words[start];
    const len = word.length;
    const firstChar = word[0];
    const lastChar = word[len - 1];

    vowelSet.has(firstChar) && vowelSet.has(lastChar)
      ? (counter += 1)
      : counter;
  }

  return counter;
}

console.log(countVowelStringsInRange(["are", "amy", "u"], 0, 2));
