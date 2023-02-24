function ruleOfDivisibilityBy7(m: number) {
	let num = m
	let steps = 0

	while (num.toString().length > 2) {
		const first = Number(num.toString().slice(0, -1))
		const last = Number(num.toString()[num.toString().length - 1])
		num = first - last * 2
		steps += 1
	}

	return [num, steps]
}

export { ruleOfDivisibilityBy7 }
