function removeChar(str: string): string {
	return str.split('').reduce((acc, curr, idx) => {
		idx === 0 || idx === str.split('').length - 1 ? acc : (acc += curr)

		return acc
	}, '')
}

export { removeChar }
