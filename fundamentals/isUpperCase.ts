function isUpperCase(str: string) {
	return str.split('').reduce((acc, curr) => {
		if (acc == false) return acc

		curr === curr.toUpperCase() ? (acc = true) : (acc = false)

		return acc
	}, true)
}

export { isUpperCase }
