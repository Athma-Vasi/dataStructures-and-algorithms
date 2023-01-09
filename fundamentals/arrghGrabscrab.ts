function arrghGrabscrab(anagram: string, dict: string[]) {
	return dict
		.map((word) =>
			word
				.split('')
				.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
				.join('')
		)
		.reduce((acc: string[], curr, idx) => {
			const boolArr = anagram
				.split('')
				.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
				.reduce((acc_: boolean[], char, idx_) => {
					curr[idx_] === char ? acc_.push(true) : acc_.push(false)

					return acc_
				}, [])

			boolArr.includes(false) ? boolArr : acc.push(dict[idx])

			return acc
		}, [])
}

export { arrghGrabscrab }
