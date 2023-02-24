function round(number: number) {
	const numStr = number.toString()

	if (numStr.includes('.')) {
		const [leading, succeeding] = numStr.split('.')
		return Number(succeeding[0]) < 5 ? Number(leading) : Number(leading) + 1
	} else return number
}

function ceil(number: number) {
	const numStr = number.toString()

	if (numStr.includes('.')) {
		const [leading, _] = numStr.split('.')
		return Number(leading) + 1
	} else return number
}

function floor(number: number) {
	const numStr = number.toString()

	if (numStr.includes('.')) {
		const [leading, _] = numStr.split('.')
		return Number(leading)
	} else return number
}

export { round, ceil, floor }
