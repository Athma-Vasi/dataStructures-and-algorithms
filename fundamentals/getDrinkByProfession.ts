function getDrinkByProfession(profession: string) {
	const profDrinksMap: Map<string, string> = new Map([
		['jabroni', 'Patron Tequila'],
		['school counselor', 'Anything with Alcohol'],
		['programmer', 'Hipster Craft Beer'],
		['bike gang member', 'Moonshine'],
		['politician', 'Your tax dollars'],
		['rapper', 'Cristal'],
	])

	return profDrinksMap.get(profession.toLowerCase()) ?? 'Beer'
}

export { getDrinkByProfession }
