function seeYouNextHappyYear(year: number) {
	const isHappyYear = (year_: number): boolean =>
		new Set(year_.toString().split('')).size === year_.toString().length

	isHappyYear(year) ? (year += 1) : year
	let isHappyYrFound = false
	let year_ = year

	while (!isHappyYrFound) {
		if (isHappyYear(year_)) {
			isHappyYrFound = true
		} else {
			year_ += 1
		}
	}

	return year_
}

export { seeYouNextHappyYear }
