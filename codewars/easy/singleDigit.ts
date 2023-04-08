import { numberToBinary } from "../easy/numberToBinary.ts";

function singleDigit(n: number) {
  if (n.toString().length === 1) return n;

  let num = n;
  let sum = numberToBinary(num).reduce((acc, curr) => (acc += curr), 0);

  while (sum.toString().length > 1) {
    sum = numberToBinary(num).reduce((acc, curr) => (acc += curr), 0);
    num = sum;
  }

  return sum;
}

export { singleDigit };
