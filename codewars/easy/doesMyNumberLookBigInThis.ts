function narcissistic(value: number) {
	const strVal = value.toString()
	const length = strVal.length

	return (
		Number(strVal.split('').reduce((acc, curr) => (acc += Number(curr) ** length), 0)) ===
		value
	)
}
