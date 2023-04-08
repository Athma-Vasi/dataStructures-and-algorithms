//ran out of heap memory in random test

function customRange(start = 0, stop: number | undefined, step = 1) {
	if (stop !== undefined) if (stop < start) return []
	if (start === 0 && stop === undefined) return []
	if (stop === 0 && start === undefined) return []
	if (start === 1 && stop === 1 && step === 1) return []

	const range: number[] = []

	if (stop !== undefined && step !== undefined) {
		for (let i = start; i < stop; i += step) range.push(i)
	} else if (stop !== undefined && step === undefined) {
		for (let i = start; i < stop; i += 1) range.push(i)
	} else if (stop === undefined && step === undefined) {
		for (let i = 0; i < start; i += 1) range.push(i)
	}

	return range
}

// console.log(customRange(1, 11, undefined))
// console.log(customRange(1, 4, 0))
// console.log(customRange(1, undefined, undefined))
console.log(customRange(5, 10, undefined))
