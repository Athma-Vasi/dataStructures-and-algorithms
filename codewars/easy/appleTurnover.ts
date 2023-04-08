function appleTurnover(x: number | string) {
	if (typeof x === 'number') {
		if (x ** 2 > 1000) return "It's hotter than the sun!!"
		else return 'Help yourself to a honeycomb Yorkie for the glovebox.'
	} else if (typeof x === 'string') {
		if (Number(x) ** 2 > 1000) return "It's hotter than the sun!!"
		else return 'Help yourself to a honeycomb Yorkie for the glovebox.'
	}
}

export { appleTurnover }
