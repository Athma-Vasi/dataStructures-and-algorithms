function kiyoLCM(arr: number[][]) {
	//sum of all nums
	if (arr.reduce((a, c) => (a += c.reduce((a_, c_) => (a_ += c_), 0)), 0) === 0) return 0

	const arrOfOddNumArr = arr.reduce((acc: number[][], numArr) => {
		const oddNumArr = numArr.reduce((arr: number[], num) => {
			Number.isNaN(Number(num))
				? arr
				: num === 1
				? arr.push(num)
				: num % 2 === 0
				? arr
				: arr.push(num)

			return arr
		}, [])
		acc.push(oddNumArr)

		return acc
	}, [])

	const sumOddNumSubArr = arrOfOddNumArr.reduce((acc: number[], curr: number[]) => {
		const sumSubArr = curr.reduce((acc, curr) => (acc += curr), 0)
		acc.push(sumSubArr)

		return acc
	}, [])

	const ascSortedSumArr = sumOddNumSubArr.sort((a, b) => a - b)

	let first = ascSortedSumArr[0]
	let second = ascSortedSumArr[1]
	let lcm = lowestCommonMultiple(first, second)

	ascSortedSumArr.forEach((val, idx) => {
		if (idx > 1) {
			first = lcm
			second = val
			lcm = lowestCommonMultiple(first, second)
		}
	})

	return lcm
}

function greatestCommonDivisor(a: number, b: number) {
	if (a < 1 || b < 1) return -1

	let remainder = 0
	do {
		remainder = a % b
		a = b
		b = remainder
	} while (b !== 0)

	return a
}

function lowestCommonMultiple(a: number, b: number) {
	return a === 0 || b === 0 ? 0 : (a * b) / greatestCommonDivisor(a, b)
}

export { kiyoLCM }
