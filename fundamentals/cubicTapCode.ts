function cubicTapDecode(str: string) {
	//converts each cluster of dots between spaces into array of cluster amount
	let temp = 0
	const amtOfSpacedDots = str.split('').reduce((acc: number[], curr, idx) => {
		if (curr === '.' && idx === str.length - 1) {
			temp += 1
			acc.push(temp)
		}

		if (curr === '.') temp += 1
		else {
			acc.push(temp)
			temp = 0
		}

		return acc
	}, [])

	//converts amounts arr into Array<3-tuple[]> to be passed in as a key
	let temp_: number[] = []
	const charPadCodes = amtOfSpacedDots.reduce((acc: number[][], curr, idx) => {
		if ((idx + 1) % 3 === 0) {
			temp_.push(curr)
			acc.push(temp_)
			temp_ = []
		} else temp_.push(curr)

		return acc
	}, [])

	const charPadMap_ = charPadMap()

	return charPadCodes.reduce(
		(acc, curr: number[]) => (acc += charPadMap_.get(`${curr}`)),
		''
	)
}

function charPadMap() {
	//returns a map with key: 'column,row,layer' and val: char of alphabet
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '

	let column = 1
	let row = 1
	let layer = 1
	let code: number[] = new Array(3)

	return alphabet.split('').reduce((acc: Map<string, string>, curr) => {
		code = [column, row, layer]

		acc.set(`${code}`, curr)
		code = []

		column += 1

		if (column === 4) {
			row += 1
			column = 1
		}
		if (row === 4) {
			layer += 1
			row = 1
		}

		return acc
	}, new Map())
}

function cubicTapEncode(str: string) {
	//returns a map with key: char of alphabet and val: 'column,row,layer'
	const inverseCharPadMap = Object.entries(Object.fromEntries(charPadMap())).reduce(
		(acc: Map<string, string>, curr: [string, string]) => {
			acc.set(curr[1], curr[0])

			return acc
		},
		new Map()
	)

	//returns Array<3-tuple[]> corresponding to char key
	const charPadCodes = str.split('').reduce((acc: string[][], curr) => {
		acc.push([inverseCharPadMap.get(curr) ?? ''])

		return acc
	}, [])

	return charPadCodes
		.reduce((acc, curr: string[]) => {
			curr[0].split(',').forEach((code) => {
				acc += '.'.repeat(Number(code))
				acc += ' '
			})
			return acc
		}, '')
		.slice(0, -1)
}

export { charPadMap, cubicTapDecode, cubicTapEncode }
