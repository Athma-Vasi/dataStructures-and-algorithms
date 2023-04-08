function sortInnerContentDesc(words: string): string {
	return words
		.split(' ')
		.reduce((acc: string[], curr) => {
			const first = curr[0]
			const last = curr.length === 1 ? null : curr[curr.length - 1]
			let mid = curr.length < 3 ? null : curr.slice(1, -1)

			mid =
				mid !== null
					? mid
							.split('')
							.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0))
							.join('')
					: mid

			acc.push(`${first}${mid === null ? '' : mid}${last === null ? '' : last}`)

			return acc
		}, [])
		.join(' ')
}

export { sortInnerContentDesc }
