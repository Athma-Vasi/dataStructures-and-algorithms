function deleteNth<T>(arr: T[], n: number) {
	const countMap: Map<string, number> = new Map()

	return arr.reduce((acc: T[], curr) => {
		let count = countMap.get(`${curr}`) === undefined ? 0 : countMap.get(`${curr}`)
		if (count !== undefined) {
			countMap.set(`${curr}`, (count += 1))
			count <= n ? acc.push(curr) : acc
		}

		return acc
	}, [])
}

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2))
