function gooseFilter(birds: string[]) {
	const geese: Set<string> = new Set([
		'African',
		'Roman Tufted',
		'Toulouse',
		'Pilgrim',
		'Steinbacher',
	])

	return birds.reduce((acc: string[], curr) => {
		geese.has(curr) ? acc : acc.push(curr)

		return acc
	}, [])
}

export { gooseFilter }
