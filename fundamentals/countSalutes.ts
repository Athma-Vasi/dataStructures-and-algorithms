function countSalutes(hallway: string) {
	let result = 0

	for (let i = 0; i < hallway.length; i += 1) {
		for (let j = i + 1; j < hallway.length; j += 1) {
			if (hallway[i] === '>' && hallway[j] === '<') result += 2
		}
	}

	return result
}

export { countSalutes }
