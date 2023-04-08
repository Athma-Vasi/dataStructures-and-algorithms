function stringIncrementer(string: string) {
	const boolArr = string
		.split('')
		.map((val) => (Number.isNaN(Number(val)) ? false : true))

	if (!boolArr.includes(true)) return `${string}1`

	let isFirstNum = true
	let [chars, nums] = string.split('').reduceRight(
		(acc, curr) => {
			if (isFirstNum) {
				Number.isNaN(Number(curr))
					? (acc[0] += curr) && (isFirstNum = false)
					: (acc[1] += curr)
			} else acc[0] += curr

			return acc
		},
		['', '']
	)
	chars = chars.split('').reverse().join('')

	let [zeroes, number] = nums.split('').reduce(
		(acc, curr) => {
			curr === '0' ? (acc[0] += curr) : (acc[1] += curr)

			return acc
		},
		['', '']
	)

	const oldNumberLength = number.length
	const newNumber = Number(number) + 1
	const newNumberLength = newNumber.toString().length
	const diffLengths = newNumberLength - oldNumberLength
	zeroes = diffLengths > 0 ? zeroes.slice(0, -diffLengths) : zeroes

	return `${chars}${zeroes}${newNumber}`
}

export { stringIncrementer }
