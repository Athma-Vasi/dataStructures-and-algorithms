import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function cellsInARangeOnAnExcelSheet(s: string) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [alphabetIdxMap, idxAlphabetMap] = alphabet.split("").reduce(
    (maps: [Map<string, number>, Map<number, string>], char, idx) => {
      maps[0].set(char, idx + 1);
      maps[1].set(idx + 1, char);

      return maps;
    },
    [new Map(), new Map()]
  );

  const [startCell, endCell] = s.split(":");
  const [startingCol, startingRow] = startCell.split("");
  const [endingCol, endingRow] = endCell.split("");

  const colHeight = Number(endingRow) - Number(startingRow);
  const startColNum = alphabetIdxMap?.get(startingCol) ?? 0;
  const endColNum = alphabetIdxMap.get(endingCol) ?? 0;
  const rowDepth = endColNum - startColNum;

  let colHeightCounter = 0;
  let rowDepthCounter = 0;
  let colCharIdxStart = startColNum;
  let rowNumStart = Number(startingRow);
  const cellsResult: string[] = [];

  while (rowDepthCounter <= rowDepth) {
    while (colHeightCounter <= colHeight) {
      let cellStr = "";
      const colChar = idxAlphabetMap.get(colCharIdxStart) ?? "";
      cellStr += colChar;
      cellStr += rowNumStart.toString();
      cellsResult.push(cellStr);
      rowNumStart += 1;
      colHeightCounter += 1;
    }

    colCharIdxStart += 1;
    rowDepthCounter += 1;
    colHeightCounter = 0;
    rowNumStart = Number(startingRow);
  }

  return cellsResult;
}

export { cellsInARangeOnAnExcelSheet };

describe("cellsInARangeOnAnExcelSheet", () => {
  it("1. should return the cells in a range on an excel sheet", () => {
    const s = "A1:B2";
    assertEquals(cellsInARangeOnAnExcelSheet(s), ["A1", "A2", "B1", "B2"]);
  });

  it("2. should return the cells in a range on an excel sheet", () => {
    const s = "A1:F1";
    assertEquals(cellsInARangeOnAnExcelSheet(s), [
      "A1",
      "B1",
      "C1",
      "D1",
      "E1",
      "F1",
    ]);
  });
});
