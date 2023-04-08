type Recipe = Record<string, number>

function bakeCakes(recipe: Recipe, available: Recipe) {
	const recipeTuple = Object.entries(recipe)
	const availTuple = Object.entries(available)

	let ingredientsMap = recipeTuple.reduce(
		(acc: Map<string, number[]>, [ingredient, amount]) => {
			const amountArr = acc.get(ingredient) ?? []
			amountArr.push(amount)
			acc.set(ingredient, amountArr)

			return acc
		},
		new Map()
	)

	ingredientsMap = availTuple.reduce((acc, [ingredient, amount]) => {
		const amountArr = acc.get(ingredient) ?? []
		amountArr.push(amount)
		acc.set(ingredient, amountArr)

		return acc
	}, ingredientsMap)

	const recipeKeys = Object.keys(recipe)
	const availableKeys = Object.keys(available)

	const quotientAmounts = recipeKeys.reduce((acc: number[], ingredient) => {
		if (availableKeys.includes(ingredient)) {
			const [recipeAmount, availableAmount] = ingredientsMap.get(ingredient) ?? []
			const quotient = Math.floor(availableAmount / recipeAmount)
			acc.push(quotient)
		} else acc.push(0)

		return acc
	}, [])

	return quotientAmounts.includes(0) ? 0 : Math.min(...quotientAmounts)
}

export { bakeCakes }
