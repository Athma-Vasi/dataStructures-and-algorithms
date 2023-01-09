function removeEmptyItemsOfArray(array: unknown[]) {
	return array.reduce((acc: unknown[], curr) => {
		acc.push(curr)

		return acc
	}, [])
}

export { removeEmptyItemsOfArray }
