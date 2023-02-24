function sumProdDiags(matrix: number[][]) {
	const xLength = matrix[0].length
	const yLength = matrix.length

	let sum1Start = [0, matrix[0][xLength - 1]]
	let sum2Start = [0, 0]

	const sum1End = [matrix[yLength - 1], 0]
	const sum2End = [matrix[yLength - 1], matrix[yLength - 1][xLength]]

	let sum1Arr: number[] = []
	let sum2Arr: number[] = []
	let sum1Incr = 1
	let sum2Incr = 1

	while (sum1Start[0] !== sum1End[0] && sum1Start[1] !== sum1End[1]) {
		let localSum1Incr = 1
		let localSum2Incr = 1

		while (sum1Incr < yLength) {
			// x
			matrix[0][xLength - 1 + 1] === undefined
				? sum1Arr
				: sum1Arr.push(matrix[0][xLength - 1 - localSum1Incr])

			//set new sum1Start
			sum1Start = [0, matrix[0][xLength - 1 - localSum1Incr]]

			// y
			matrix[0][xLength - 1 + 1] === undefined
				? sum1Arr
				: sum1Arr.push(matrix[0 + localSum1Incr][xLength - 1])
		}
	}
}
