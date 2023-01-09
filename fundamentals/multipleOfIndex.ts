function multipleOfIndex(array: number[]) {
	return array.reduce((acc: number[], curr, idx) => {
		idx === 0 ? acc : curr % idx === 0 ? acc.push(curr) : acc

		return acc
	}, [])
}

export { multipleOfIndex }
