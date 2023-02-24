function rot90Clock(str: string) {
	const strArr = str.split('\n')
	const result: string[] = []

	let temp = ''
	for (let i = strArr.length - 1; i >= 0; i -= 1) {
		for (let j = strArr[i].length - 1; j >= 0; j -= 1) {
			temp += strArr[j][i]
		}
		result.push(temp)
		temp = ''
	}

	return result.reverse().join('\n')
}

function diag1Sym(str: string) {
	const strArr = str.split('\n')
	const result: string[] = []

	let temp = ''
	for (let i = 0; i < strArr.length; i += 1) {
		for (let j = 0; j < strArr[i].length; j += 1) {
			temp += strArr[j][i]
		}
		result.push(temp)
		temp = ''
	}

	return result.join('\n')
}

function selfieAndDiag1(str: string): string {
	const diag1 = diag1Sym(str).split('\n')

	let temp = ''

	return str
		.split('\n')
		.reduce((acc: string[], curr, idx) => {
			temp += curr
			temp += '|'
			temp += diag1[idx]

			acc.push(temp)
			temp = ''

			return acc
		}, [])
		.join('\n')
}

function oper(fct: (s: string) => string, s: string): string {
	return fct(s)
}

export { rot90Clock, selfieAndDiag1, diag1Sym }
