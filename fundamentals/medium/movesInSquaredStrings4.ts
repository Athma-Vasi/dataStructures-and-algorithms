function diag2Sym(str: string) {
	const strArr = str.split('\n')

	const result: string[] = []
	let temp = ''

	for (let i = strArr.length - 1; i >= 0; i -= 1) {
		for (let j = strArr.length - 1; j >= 0; j -= 1) {
			temp += strArr[j][i]
		}

		result.push(temp)
		temp = ''
	}

	return result.join('\n')
}

console.log(diag2Sym('abcd\nefgh\nijkl\nmnop'))
//  "plhd\nokgc\nnjfb\nmiea"

function rot90Counter(str: string) {
	const strArr = str.split('\n')

	const result: string[] = []
	let temp = ''

	for (let i = strArr.length - 1; i >= 0; i -= 1) {
		for (let j = 0; j < strArr.length; j += 1) {
			temp += strArr[j][i]
		}

		result.push(temp)
		temp = ''
	}

	return result.join('\n')
}

console.log(rot90Counter('abcd\nefgh\nijkl\nmnop'))
//  'dhlp\ncgko\nbfjn\naeim

function selfieDiag2Counterclock(str: string) {
	const strArr = str.split('\n')
	const diag2Sym_ = diag2Sym(str).split('\n')
	const rot90Counter_ = rot90Counter(str).split('\n')

	let temp = ''
	return strArr
		.reduce((acc: string[], curr, idx) => {
			temp += curr
			temp += '|'
			temp += diag2Sym_[idx]
			temp += '|'
			temp += rot90Counter_[idx]

			acc.push(temp)
			temp = ''

			return acc
		}, [])
		.join('\n')
}

console.log(selfieDiag2Counterclock('NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg'))
//  "NJVGhr|gKilwr|rwliKg\nMObsvw|WLhtvh|hvthLW\ntPhCtl|iRnCsG|GsCnRi\nsoEnhi|lQEhbV|VbhEQl\nrtQRLK|jtoPOJ|JOPotj\nzjliWg|zrstMN|NMtsrz"

function oper(fct: (s: string) => string, s: string): string {
	return fct(s)
}
