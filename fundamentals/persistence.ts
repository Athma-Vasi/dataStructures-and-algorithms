function persistence(num: number) {
	if (num < 10) return 0

	let multiply = num
	let temp = 1
	let count = 0

	do {
		const numArr = multiply.toString().split('')

		for (let i = 0; i < numArr.length; i += 1) {
			temp *= Number(numArr[i])
			multiply = temp
		}

		temp = 1
		count += 1
	} while (multiply >= 10)

	return count
}

export { persistence }
