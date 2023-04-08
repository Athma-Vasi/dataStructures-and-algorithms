function pipeFix(numbers: number[]) {
	const fixedArr: number[] = []
	for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i += 1) {
		fixedArr.push(i)
	}

	return fixedArr
}

export { pipeFix }
