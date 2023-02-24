function oddEvenStrSort(s: string) {
	return s
		.split('')
		.reduce(
			(acc: [string, string], curr, idx) => {
				idx % 2 === 0 ? (acc[0] += curr) : (acc[1] += curr)

				return acc
			},
			['', '']
		)
		.join(' ')
}

export { oddEvenStrSort }
