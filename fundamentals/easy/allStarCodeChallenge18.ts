function strCount(str: string, letter: string) {
	return str.split('').reduce((acc, curr) => (curr === letter ? (acc += 1) : acc), 0)
}

export { strCount }
