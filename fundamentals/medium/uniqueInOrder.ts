//fails random tests with unknown args

function uniqueInOrder(iterable: string | unknown[]) {
	if (iterable === '' || iterable.length === 0) return []

	let i = 1
	let j = 2
	let k = 3
	const uniqueElems: unknown[] = [iterable[0]]
	let prevChar = uniqueElems[0]

	while (k < iterable.length) {
		const windowElems = [iterable[i], iterable[j], iterable[k]]
		const windowElemsSet = new Set(windowElems)

		windowElemsSet.forEach((val) =>
			val === prevChar ? uniqueElems : uniqueElems.push(val)
		)

		i = i < iterable.length - 3 ? i + 3 : i + (iterable.length - i)
		j = j < iterable.length - 3 ? j + 3 : j + (iterable.length - j)
		k = k < iterable.length - 3 ? k + 3 : k + (iterable.length - k)
		prevChar = uniqueElems[uniqueElems.length - 1]
	}

	return uniqueElems
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1,2,3]
