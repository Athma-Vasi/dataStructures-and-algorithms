// this non-brute force solution does not pass server tests
// brute force solution is not allowed so ...

function permuteAPalindrome(str: string) {
	if (str === '') return true

	const charCounts = str.split('').reduce((acc: Map<string, number>, curr) => {
		let hasVal = acc.get(curr) === undefined ? 0 : acc.get(curr)
		if (hasVal !== undefined) acc.set(curr, (hasVal += 1))

		return acc
	}, new Map())

	const singleCharCount = Array.from(charCounts).reduce((acc, curr: [string, number]) => {
		curr[1] === 1 ? (acc += 1) : acc

		return acc
	}, 0)

	return singleCharCount > 1
		? false
		: singleCharCount === 1
		? true
		: charCounts.size === 1 && singleCharCount === 0
		? true
		: false
}

console.log(permuteAPalindrome('pop'))
console.log(permuteAPalindrome('madam'))
console.log(permuteAPalindrome('a'))
console.log(permuteAPalindrome('aa'))
console.log(permuteAPalindrome('baa'))
console.log(permuteAPalindrome('aab'))
console.log('\n')

console.log(permuteAPalindrome('racecars'))
console.log(permuteAPalindrome('abcdefghba'))
console.log(permuteAPalindrome(''))

console.log(permuteAPalindrome('fddfhqwgudntngqdfyfieiufgnnkewwitiiyqeennkghfwqggueii'))
