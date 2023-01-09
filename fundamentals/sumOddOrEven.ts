function sumOddOrEven(array: number[]): 'even' | 'odd' {
	return array.length === 0
		? 'even'
		: array.reduce((acc, curr) => {
				acc += curr

				return acc
		  }, 0) %
				2 ===
		  0
		? 'even'
		: 'odd'
}

export { sumOddOrEven }
