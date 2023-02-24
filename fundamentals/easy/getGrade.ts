function getGrade(a: number, b: number, c: number): 'A' | 'B' | 'C' | 'D' | 'F' {
	const average = (a + b + c) / 3

	return average >= 90
		? 'A'
		: average >= 80
		? 'B'
		: average >= 70
		? 'C'
		: average >= 60
		? 'D'
		: 'F'
}

export { getGrade }
