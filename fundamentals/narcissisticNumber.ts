function narcissisticNumber(num: number) {
	const length = num.toString().length

	return (
		num
			.toString()
			.split('')
			.reduce((acc, curr) => (acc += Number(curr) ** length), 0) === num
	)
}

export { narcissisticNumber }
