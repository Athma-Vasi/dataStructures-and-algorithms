function mumbling(s: string) {
	return s
		.toUpperCase()
		.split('')
		.reduce((acc, curr, idx) => {
			acc += curr

			for (let i = 0; i < idx; i += 1) {
				acc += curr.toLowerCase()
			}

			acc += '-'
			return acc
		}, '')
		.split('')
		.slice(0, -1)
		.join('')
}

export { mumbling }
