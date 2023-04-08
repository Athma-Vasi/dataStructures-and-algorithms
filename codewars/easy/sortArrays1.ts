function sortArrays(names: string[]) {
	return names.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
}

export { sortArrays }
