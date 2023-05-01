function reverseWordsInString(s: string) {
  return s
    .trim()
    .replaceAll("  ", " ")
    .split(" ")
    .reduceRight((acc: string[], curr) => {
      acc.push(curr);

      return acc;
    }, [])
    .join(" ");
}
