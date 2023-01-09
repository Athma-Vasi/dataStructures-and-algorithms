function rangeExtraction(list: number[]) {
	let i = 0
	let j = 1
	let result = ''
	let count = 1

	while (j < list.length) {
		const diff = Math.abs(list[i] - list[j])
		diff === 1
			? (j += 1) && (count += 1) && (i += 1)
			: (result += `${list[i - count]}-${list[j - 1]}`) &&
			  (i += 1) &&
			  (j += 1) &&
			  (count = 1)
	}

	return result
}

console.log(
	rangeExtraction([
		-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
	])
)
