/*
TSError: ⨯ Unable to compile TypeScript:
test.ts:1:22 - error TS6053: File '/runner/typings/mocha/index.d.ts' not found.
*/
//may still need to left-align word

function framedReflection(text: string) {
	if (text === '') return ''

	const lengthArr = text.split(' ').reduce((acc: number[][], curr, idx) => {
		acc.push([idx, curr.length])

		return acc
	}, [])
	const maxLength = lengthArr.sort((a, b) => b[1] - a[1])[0]

	let temp = ''
	temp += '*'.repeat(maxLength[1] + 4)
	const result = text.split(' ').reduce((acc: string[], curr) => {
		acc.push(temp)
		temp = ''

		temp += '* '
		temp += curr.split('').reduceRight((acc, curr) => (acc += curr), '')
		temp += ' *'

		return acc
	}, [])

	result.push(temp)
	result.push('*'.repeat(maxLength[1] + 4))

	return result.join('\n')
}

console.log(framedReflection('hello world'))
