function calculateAge(birthYear: number, futureYear: number) {
	const age = futureYear - birthYear

	return age < 0
		? `You will be born in ${Math.abs(age)} ${Math.abs(age) === 1 ? 'year' : 'years'}.`
		: age > 0
		? `You are ${age} ${age === 1 ? 'year' : 'years'} old.`
		: `You were born this very year!`
}

export { calculateAge }
