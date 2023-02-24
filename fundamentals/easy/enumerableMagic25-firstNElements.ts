function take<T>(arr: T[], n: number): T[] {
	return arr.reduce((acc: T[], curr, idx) => {
		idx < n ? acc.push(curr) : acc

		return acc
	}, [])
}

export { take }
