import {
	bgBrightBlue,
	bgBrightMagenta,
} from 'https://deno.land/std@0.152.0/fmt/colors.ts'
import { cyan } from 'https://deno.land/std@0.152.0/fmt/colors.ts'
import { brightGreen } from 'https://deno.land/std@0.152.0/fmt/colors.ts'
import { bgBlue } from 'https://deno.land/std@0.152.0/fmt/colors.ts'

function sumOfPairs(ints: number[], s: number) {
	// let smallestIdx = 0
	// return ints.reduce(
	// 	(acc: [number, number], curr, idx) => {
	// 		ints.forEach((val_, idx_) => {
	// 			//prevents comparison with itself and repeated comparisons
	// 			if (idx_ > idx) {
	// 				if (curr + val_ === s) {
	// 					smallestIdx = Math.min(idx, idx_)
	// 					acc[0] === curr
	// 					acc[1] === val_
	// 				}
	// 			}
	// 		})
	// 		return acc
	// 	},
	// 	[0, 0]
	// )

	//CONVERT MEMO KEYS TO A STRING CUZ CURRENTLY UNABLE TO ACCESS MEMO-
	//-USING SYNTAX BELOW

	let memo: Map<string, number> = new Map()
	let indexMap: Map<string, string> = new Map()

	for (let i = 0; i < ints.length; i += 1) {
		for (let j = 1; j < ints.length; j += 1) {
			if (i !== j) {
				const first = ints[i]
				const second = ints[j]

				console.log('first', first)
				console.log('second', second)

				let storedResult =
					memo.get(`${first},${second}`) ?? memo.get(`${second},${first}`)

				console.log('storedResult', storedResult)

				storedResult ??
					(memo.set(`${first},${second}`, first + second) &&
						memo.set(`${second},${first}`, first + second))

				let newResult = memo.get(`${first},${second}`) ?? memo.get(`${second},${first}`)
				console.log('newResult', newResult)

				if (typeof newResult === 'number' && newResult === s) {
					console.log(bgBrightMagenta('--entered--'))
				}
			}
		}
	}
	return indexMap
}

console.log(sumOfPairs([10, 5, 2, 3, 7, 5], 10))

export { sumOfPairs }
