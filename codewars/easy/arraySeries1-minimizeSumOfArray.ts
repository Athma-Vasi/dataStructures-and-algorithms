//the kata explanation and assertions do not match
//this answers the kata explanation but fails the assertions...

function minimizeSumOfArray(arr: number[]) {
	const intProdArr: number[] = []

	for (let i = 0; i < arr.length; i += 1) {
		for (let j = i; j < arr.length; j += 1) {
			if (i !== j) intProdArr.push(arr[i] * arr[j])
		}
	}

	const intProdSumArr: number[] = []
	for (let i = 0; i < intProdArr.length; i += 1) {
		for (let j = i; j < intProdArr.length; j += 1) {
			if (i !== j) intProdSumArr.push(intProdArr[i] + intProdArr[j])
		}
	}
	return Math.min(...intProdSumArr)
}

export { minimizeSumOfArray }
