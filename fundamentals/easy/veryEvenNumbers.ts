function veryEvenNumbers(n: number) {
	if (n.toString().length === 1) {
		return n % 2 === 0
	} else {
		let num = n

		while (num.toString().length > 1) {
			const numArr = num.toString().split('')
			const numTotal = numArr.reduce((acc, curr) => (acc += Number(curr)), 0)

			num = numTotal
		}

		return num % 2 === 0
	}
}

export { veryEvenNumbers }
