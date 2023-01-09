function fakeBinary(x: string): string {
	return x.split('').reduce((acc, curr) => {
		Number(curr) < 5 ? (acc += 0) : (acc += 1)

		return acc
	}, '')
}

export { fakeBinary }
