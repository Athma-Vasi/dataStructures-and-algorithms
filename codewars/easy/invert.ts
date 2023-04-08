function invert(array: number[]): number[] {
	return array.reduce((acc: number[], curr) => {
		acc.push(curr * -1)

		return acc
	}, [])
}

export { invert }
