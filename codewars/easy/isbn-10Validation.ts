function validISBN10(isbn: string) {
	return isbn.length !== 10
		? false
		: isbn.split('').reduce((acc, curr, idx) => {
				if (idx < 9)
					Number.isNaN(Number(curr))
						? (acc += Infinity)
						: (acc += Number(curr) * (idx + 1))
				else curr === 'X' ? (acc += 10 * (idx + 1)) : (acc += Number(curr) * (idx + 1))

				return acc
		  }, 0) %
				11 ===
				0
}

export { validISBN10 }
