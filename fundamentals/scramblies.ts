//optimized for time complexity, but not space complexity
//fails very large string test with ~ 2 GB allocations...

function scramble(str1: string, str2: string) {
	const str1Length = str1.length
	const str2Length = str2.length
	if (str1Length < str2Length) return false

	let sortedStr1 = str1.split('').sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
	const sortedStr2 = str2.split('').sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))

	let i = 0
	let j = 0

	while (i < str2Length) {
		if (sortedStr1[j] === sortedStr2[i]) (i += 1) && (j += 1)
		else {
			sortedStr1[j] = ''
			j += 1
			if (sortedStr1[j] === sortedStr2[i]) (i += 1) && (j += 1)
		}
	}
	sortedStr1 = sortedStr1.filter((elem) => elem !== '')

	const newStr1Length = sortedStr1.length
	const diffLengths = newStr1Length - str2Length
	const newStr1 = diffLengths === 0 ? sortedStr1 : sortedStr1.slice(0, -diffLengths)

	return newStr1.join('') === sortedStr2.join('')
}

console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))

let s1 = 'abcdefghijklmnopqrstuvwxyz'.repeat(10_000)
let s2 = 'zyxcba'.repeat(9_000)

// console.time()
// scramble(s1, s2)
// console.timeEnd()

Deno.bench('very large string', () => {
	scramble(s1, s2)
})
