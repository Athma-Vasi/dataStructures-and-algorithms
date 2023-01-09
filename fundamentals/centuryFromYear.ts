function centuryFromYear(year: number) {
	return year % 100 > 0 && year % 100 <= 100
		? Math.floor(year / 100) + 1
		: Math.floor(year / 100)
}

export { centuryFromYear }
