function stockList(listOfBooks: string[], stockList: string[]) {
	const letterWithQuantity = listOfBooks.reduce((acc: Map<string, number>, curr) => {
		const [code, _] = curr.split(' ')
		let quantity = Number(_)

		const sumQuantity = acc.get(code[0]) ?? 0
		acc.set(code[0], (quantity += sumQuantity))

		return acc
	}, new Map())

	return Object.values(Object.fromEntries(letterWithQuantity)).reduce(
		(acc, curr) => (acc += curr),
		0
	) === 0
		? ''
		: stockList
				.reduce((acc, curr) => {
					Object.keys(Object.fromEntries(letterWithQuantity)).includes(curr)
						? (acc += `(${curr} : ${letterWithQuantity.get(curr)}) - `)
						: (acc += `(${curr} : 0) - `)

					return acc
				}, '')
				.split('')
				.slice(0, -3)
				.join('')
}

export { stockList }
