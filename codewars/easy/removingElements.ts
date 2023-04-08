function removingElements<T>(arr: T[]): T[] {
	return arr.reduce((acc: T[], curr, idx) => {
		idx === 0 ? acc.push(curr) : idx % 2 === 0 ? acc.push(curr) : acc

		return acc
	}, [])
}

export { removingElements }
