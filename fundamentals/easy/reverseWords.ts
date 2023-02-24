function reverseWords(str: string): string {
	return str.includes(' ')
		? str.split(' ').reduce((acc, curr, idx) => {
				for (let i = curr.length - 1; i >= 0; i -= 1) {
					acc += curr[i]
				}
				idx === str.split(' ').length - 1 ? acc : (acc += ' ')

				return acc
		  }, '')
		: str.split('').reduceRight((acc, curr) => {
				acc += curr

				return acc
		  }, '')
}

export { reverseWords }
