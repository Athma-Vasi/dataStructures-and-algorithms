function sortingTheSentence(s: string) {
  return s
    .split(" ")
    .reduce((result: [number, string][], word: string) => {
      const parsedTuple = word.split("").reduce(
        (tuple: [number, string], char: string) => {
          const parsedChar = parseInt(char);
          Number.isNaN(parsedChar)
            ? (tuple[1] += char)
            : (tuple[0] = parsedChar);

          return tuple;
        },
        [0, ""]
      );
      result.push(parsedTuple);

      return result;
    }, [])
    .sort((a: [number, string], z: [number, string]) =>
      a < z ? -1 : a > z ? 1 : 0
    )
    .map((tuple: [number, string]) => tuple[1])
    .join(" ");
}

export { sortingTheSentence };
