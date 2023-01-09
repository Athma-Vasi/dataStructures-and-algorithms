function expressionsMatter(a: number, b: number, c: number) {
	const tempArr: string[] = []
	tempArr.push(`${a} * (${b} + ${c})`)
	tempArr.push(`(${a} * ${b}) + ${c}`)
	tempArr.push(`${a} * ${b} * ${c}`)
	tempArr.push(`${a} + ${b} + ${c}`)
	tempArr.push(`${a} + ${b} * ${c}`)
	tempArr.push(`(${a} + ${b}) * ${c}`)

	const scoreArr = tempArr.reduce((acc: number[], curr) => {
		acc.push(eval(curr))

		return acc
	}, [])

	return Math.max(...scoreArr)
}

export { expressionsMatter }
