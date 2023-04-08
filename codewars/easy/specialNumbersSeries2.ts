function specialNumberSeries2(num: number) {
	return num
		.toString()
		.split('')
		.reduce((acc, curr) => {
			let temp = 1
			for (let i = Number(curr); i >= 1; i -= 1) {
				temp *= i
			}
			acc += temp

			return acc
		}, 0) === num
		? 'STRONG!!!!'
		: 'Not Strong !!'
}

export { specialNumberSeries2 }
