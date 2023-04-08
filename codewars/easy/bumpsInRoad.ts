function bumpsInRoad(x: string) {
	const bumpMap = new Map([
		['_', 0],
		['n', 1],
	])

	return x.split('').reduce((acc, curr) => (acc += bumpMap.get(curr) ?? -Infinity), 0) <=
		15
		? 'Woohoo!'
		: 'Car Dead'
}

export { bumpsInRoad }
