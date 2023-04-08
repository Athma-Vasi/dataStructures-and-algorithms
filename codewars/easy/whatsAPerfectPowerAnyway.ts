//times out on random large perfect number

function isPerfectPower(n: number) {
	if (n === 4) return [2, 2]
	if (n === 6) return [2, 3]

	let base = 2
	let exp = 1
	const perfectPairs: [number, number][] = []

	while (base < n) {
		while (exp < n) {
			const tempNum = base ** exp

			if (tempNum === n) {
				perfectPairs.push([base, exp])
				exp += 1
			} else exp += 1
		}
		exp = 1
		base += 1
	}

	return perfectPairs.length === 0 ? null : perfectPairs[0]
}

// below only generates perfect numbers, not their bases or exponents

// function isPerfectPower(n: number) {
// 	const memoSet: Set<number> = new Set()
// 	memoSet.add(1)

// 	for (let i = 2; i * i <= n; i += 1) {
// 		let j = i * i
// 		memoSet.add(j)

// 		while (j * i <= n) {
// 			memoSet.add(j * i)
// 			j = j * i
// 		}
// 	}

// 	return memoSet
// }

console.log(isPerfectPower(4))
console.log(isPerfectPower(8))
console.log(isPerfectPower(9))
console.log(isPerfectPower(81))
