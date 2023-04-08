function directionsReduction(arr: string[]) {
	let needlessDirMap = new Map([
		['NORTH', 'SOUTH'],
		['SOUTH', 'NORTH'],
		['EAST', 'WEST'],
		['WEST', 'EAST'],
	])
	let coordsArr: string[] = []

	for (let i = 1; i < arr.length; i += 2) {
		let prev = arr[i - 1]
		let curr = arr[i]

		if (prev === 'NORTH' && curr === 'EAST') coordsArr.push(prev) && coordsArr.push(curr)
		if (prev === 'NORTH' && curr === 'WEST') coordsArr.push(prev) && coordsArr.push(curr)
		if (prev === 'EAST' && curr === 'NORTH') coordsArr.push(prev) && coordsArr.push(curr)
		if (prev === 'EAST' && curr === 'SOUTH') coordsArr.push(prev) && coordsArr.push(curr)
		if (prev === 'SOUTH' && curr === 'EAST') coordsArr.push(prev) && coordsArr.push(curr)
		if (prev === 'SOUTH' && curr === 'WEST') coordsArr.push(prev) && coordsArr.push(curr)
		if (prev === 'WEST' && curr === 'NORTH') coordsArr.push(prev) && coordsArr.push(curr)
		if (prev === 'WEST' && curr === 'SOUTH') coordsArr.push(prev) && coordsArr.push(curr)
	}
	return coordsArr
}

console.log(
	directionsReduction(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
)
console.log(directionsReduction(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']))
