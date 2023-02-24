function findTheCapitals(word: string) {
	return word.split('').reduce((acc: number[], curr, idx) => {
		curr === curr.toUpperCase() ? acc.push(idx) : acc

		return acc
	}, [])
}

export { findTheCapitals }
