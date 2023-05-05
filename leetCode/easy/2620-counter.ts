function createCounter(n: number): () => number {
  let counter = n;

  return function () {
    if (counter === n) {
      counter += 1;
      return n;
    }

    counter += 1;
    return counter - 1;
  };
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
