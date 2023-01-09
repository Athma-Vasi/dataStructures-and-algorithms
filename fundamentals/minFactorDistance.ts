function minFactorDistance(n: number) {
	const factorArr = factorsOfANumber(n).sort((a, b) => a - b)

	const result: number[] = []

	for (let i = 1; i < factorArr.length; i += 1) {
		result.push(factorArr[i] - factorArr[i - 1])
	}

	return result.sort((a, b) => a - b)[0]
}

function factorsOfANumber(num: number): number[] {
	const arr = []
	let i = 1

	while (i * i <= num) {
		if (num % i === 0) {
			arr.push(i)
			if (Math.floor(num / i) !== i) arr.push(Math.floor(num / i))
		}

		i += 1
	}

	return arr
}

console.log(minFactorDistance(13013))
