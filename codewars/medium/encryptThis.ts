function encryptThis(str: string) {
	return str
		.split(' ')
		.reduce((acc, curr) => {
			const letter2nd = curr[1]
			const letterLast = curr[curr.length - 1]

			curr.split('').forEach((value, idx) => {
				idx === 0
					? (acc += value.charCodeAt(0))
					: idx === 1
					? (acc += letterLast)
					: idx === curr.length - 1
					? (acc += letter2nd)
					: (acc += value)
			})
			acc += ' '

			return acc
		}, '')
		.split('')
		.slice(0, -1)
		.join('')
}

export { encryptThis }
