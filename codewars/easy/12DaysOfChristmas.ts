function the12DaysOfChristmas(a: string, b: string) {
	const aDay_ = a
		.split('')
		.reduce((acc, curr) => (Number.isNaN(Number(curr)) ? acc : (acc += curr)), '')

	const bDay_ = b
		.split('')
		.reduce((acc, curr) => (Number.isNaN(Number(curr)) ? acc : (acc += curr)), '')

	const aDay = Number(aDay_)
	const bDay = Number(bDay_)

	if (aDay === bDay) {
		if (a.includes('th')) return aDay - bDay
		else return bDay - aDay
	} else return bDay - aDay
}

export { the12DaysOfChristmas }
