function sumMix(x: string[]): number {
	return x.reduce((acc, curr) => {
		acc += Number(curr)
		return acc
	}, 0)
}

export { sumMix }
