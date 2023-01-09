function alternateCapitalization(s: string) {
	return s.split('').reduce(
		(acc: string[], curr, idx) => {
			if (idx % 2 === 0) {
				acc[0] += curr.toUpperCase()
				acc[1] += curr.toLowerCase()
			} else {
				acc[1] += curr.toUpperCase()
				acc[0] += curr.toLowerCase()
			}

			return acc
		},
		['', '']
	)
}

console.log(alternateCapitalization('abcdef'))
console.log(0 % 2 === 0)
