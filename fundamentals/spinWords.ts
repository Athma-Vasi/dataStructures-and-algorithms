function spinWords(words: string) {
	return words
		.split(' ')
		.reduce((acc, curr) => {
			const temp =
				curr.length > 4
					? curr.split('').reduceRight((acc_, curr_) => (acc_ += curr_), '')
					: curr
			acc += temp
			acc += ' '

			return acc
		}, '')
		.slice(0, -1)
}

export { spinWords }
