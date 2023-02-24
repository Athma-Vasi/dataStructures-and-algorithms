function quarterOfTheYear(month: number) {
	return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4
}

export { quarterOfTheYear }
