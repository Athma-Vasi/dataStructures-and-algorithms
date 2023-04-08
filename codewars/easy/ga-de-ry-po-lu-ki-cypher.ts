function encodeCypher(str: string) {
	const pad: Map<string, string> = new Map([
		['G', 'A'],
		['g', 'a'],
		['A', 'G'],
		['a', 'g'],
		['D', 'E'],
		['d', 'e'],
		['E', 'D'],
		['e', 'd'],
		['R', 'Y'],
		['r', 'y'],
		['Y', 'R'],
		['y', 'r'],
		['P', 'O'],
		['p', 'o'],
		['O', 'P'],
		['o', 'p'],
		['L', 'U'],
		['l', 'u'],
		['U', 'L'],
		['u', 'l'],
		['K', 'I'],
		['k', 'i'],
		['I', 'K'],
		['i', 'k'],
	])

	return str
		.split(' ')
		.reduce((acc: string[], curr) => {
			curr.split('').forEach((val) => acc.push(pad.get(val) ?? val))
			acc.push(' ')

			return acc
		}, [])
		.slice(0, -1) //removes trailing space
		.join('')
}

function decodeCypher(str: string) {
	const pad: Map<string, string> = new Map([
		['G', 'A'],
		['g', 'a'],
		['A', 'G'],
		['a', 'g'],
		['D', 'E'],
		['d', 'e'],
		['E', 'D'],
		['e', 'd'],
		['R', 'Y'],
		['r', 'y'],
		['Y', 'R'],
		['y', 'r'],
		['P', 'O'],
		['p', 'o'],
		['O', 'P'],
		['o', 'p'],
		['L', 'U'],
		['l', 'u'],
		['U', 'L'],
		['u', 'l'],
		['K', 'I'],
		['k', 'i'],
		['I', 'K'],
		['i', 'k'],
	])

	return str
		.split(' ')
		.reduce((acc: string[], curr) => {
			curr.split('').forEach((val) => acc.push(pad.get(val) ?? val))
			acc.push(' ')

			return acc
		}, [])
		.slice(0, -1) //removes trailing space
		.join('')
}

export { encodeCypher, decodeCypher }
