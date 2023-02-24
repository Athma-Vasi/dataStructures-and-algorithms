//fails a 'random test' that does not reveal arguments passed in

function charCodeCalculation(str: string) {
	const total1 = str.split('').reduce((acc, curr) => (acc += curr.charCodeAt(0)), '')

	const total2 = total1
		.toString()
		.split('')
		.reduce((acc, curr) => (curr === '7' ? (acc += '1') : (acc += curr)), '')

	return Number(total1) - Number(total2)
}

export { charCodeCalculation }
