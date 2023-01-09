function powersOfTwo(n: number) {
	const powersArr: number[] = []
	for (let i = 0; i <= n; i += 1) powersArr.push(2 ** i)

	return powersArr
}

export { powersOfTwo }
