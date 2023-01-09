function plusOneArray(arr: number[]) {
	if (arr.length === 0) return null
	if (
		arr
			.reduce(
				(acc, curr) =>
					curr < 0 || curr.toString().length > 1 ? (acc += false) : (acc += true),
				''
			)
			.includes('false')
	)
		return null

	if (arr.length === 1) {
		const resultArr: number[] = []
		if (arr[0] < 9) {
			const result = arr[0] + 1
			resultArr.push(result)
			return resultArr
		} else if (arr[0] === 9) {
			return [1, 0]
		}
	}

	let remainder = 0
	return arr.reduceRight((acc: number[], curr, idx) => {
		if (remainder === 1) {
			if (idx === 0) {
				remainder + curr > 9
					? acc.unshift(0) && acc.unshift(1)
					: acc.unshift(remainder + curr)
			} else
				remainder + curr > 9
					? acc.unshift(0)
					: acc.unshift(remainder + curr) && remainder--
		} else {
			if (idx === arr.length - 1 && idx !== 0) {
				curr + 1 > 9 ? acc.unshift(0) && remainder++ : acc.unshift(curr + 1)
			} else acc.unshift(curr)
		}

		return acc
	}, [])
}

export { plusOneArray }
