function hexToDecimal(hexString: string) {
	const hexToDecTable: Map<string, number> = new Map([
		['0', 0],
		['1', 1],
		['2', 2],
		['3', 3],
		['4', 4],
		['5', 5],
		['6', 6],
		['7', 7],
		['8', 8],
		['9', 9],
		['A', 10],
		['B', 11],
		['C', 12],
		['D', 13],
		['E', 14],
		['F', 15],
	])

	return hexString.includes('-')
		? hexString
				.toUpperCase()
				.split('')
				.reduceRight((acc, curr, idx) => {
					if (curr !== '-') {
						const dec = hexToDecTable.get(curr) ?? -Infinity
						acc += dec === -Infinity ? dec : dec * 16 ** (hexString.length - 1 - idx)
					}

					return acc
				}, 0) * -1
		: hexString
				.toUpperCase()
				.split('')
				.reduceRight((acc, curr, idx) => {
					const dec = hexToDecTable.get(curr) ?? -Infinity
					acc += dec === -Infinity ? dec : dec * 16 ** (hexString.length - 1 - idx)

					return acc
				}, 0)
}

export { hexToDecimal }
