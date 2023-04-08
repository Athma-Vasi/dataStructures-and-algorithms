function upDownColSort(matrix: number[][]) {
  const flatSorted = matrix.flatMap((n) => n).sort((a, b) => a - b);
  const mtxLength = matrix.length;
  const arrLength = matrix[0].length;

  let x = 0;
  let y = 0;
  let isDirDown = true;

  return flatSorted.reduce((acc: number[][], curr) => {
    //this is where it breaks
    //adds -20 to 0,0 & 1,0 & 2,0 instead of just 0,0
    acc[x][y] = curr; // <-----
    isDirDown ? (x += 1) : (x -= 1);

    if (x === mtxLength - 1) {
      isDirDown = false;
      y += 1;
    }
    if (x === 0) {
      isDirDown = true;
    }

    return acc;
  }, new Array(mtxLength).fill(new Array(arrLength)));
}

/*
const m = [
	[-20, -4, -1],
	[1, 4, 7],
	[8, 10, 12],
]

//0,0   1,0   2,0   2,1   1,1   0,1   0,2   1,2   2,2
const m_ = [
	[-20, 7, 8],
	[-4, 4, 10],
	[-1, 1, 12],
]
*/

// console.log(upDownColSort(m))
