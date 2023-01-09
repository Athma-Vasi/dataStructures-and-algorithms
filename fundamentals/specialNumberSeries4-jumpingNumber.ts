function jumpingNumber(n: number) {
	const numStr = n.toString()
	if (numStr.length === 1) return 'Jumping!!'

	const resultArr: number[] = []
	for (let i = 1; i < numStr.length; i += 1)
		resultArr.push(Math.abs(Number(numStr[i]) - Number(numStr[i - 1])))

	return resultArr.reduce((acc, curr) => (acc *= curr), 1) === 1 ? 'Jumping!!' : 'Not!!'
}

export { jumpingNumber }
