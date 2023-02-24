function sortAndStar(s: string[]) {
	return s.sort().reduce((acc, curr, idx) => {
		idx === 0
			? curr.split('').forEach((value, idx) => {
					if (idx !== curr.length - 1) {
						acc += value
						acc += '***'
					} else acc += value
			  })
			: curr

		return acc
	}, '')
}

export { sortAndStar }
