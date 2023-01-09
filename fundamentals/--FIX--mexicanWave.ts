function mexicanWave(str: string) {
	if (str === '') return []
	const leftSpace = str.split('').reduce((acc, curr) => {
		if (curr !== ' ') return acc
		else {
			acc += 1
		}
		return acc
	}, 0)

	const resultArr: string[] = []
	for (let i = 0; i < str.length; i += 1) {
		// const temp = str.split('').reduce((acc, curr, idx) => {
		// 	idx === i && curr !== ' '
		// 		? (acc += curr.toUpperCase())
		// 		: idx === i && curr === ' '
		// 		? acc
		// 		: (acc += curr)

		// 	return acc
		// }, '')
		const temp = str.split('').reduce((acc, curr, idx) => {
			if (curr === ' ' && idx === i) acc += curr

			return acc
		}, '')

		resultArr.push(temp)
	}

	return resultArr
}

console.log(mexicanWave(' dxmsytc  '))
console.log(mexicanWave('hello'))
console.log(mexicanWave('two words'))

const result = [
	' Dxmsytc  ',
	' dXmsytc  ',
	' dxMsytc  ',
	' dxmSytc  ',
	' dxmsYtc  ',
	' dxmsyTc  ',
	' dxmsytC  ',
	' dxmsytc ',
]

const expected = [
	' Dxmsytc  ',
	' dXmsytc  ',
	' dxMsytc  ',
	' dxmSytc  ',
	' dxmsYtc  ',
	' dxmsyTc  ',
	' dxmsytC  ',
]

// const temp = str.split('').reduce((acc, curr, idx) => {
//   idx === i && curr !== ' '
//     ? (acc += curr.toUpperCase())
//     : idx === i && curr === ' '
//     ? acc
//     : (acc += curr)

//   return acc
// }, '')

// return isFirstAndLastEmpty
// 		? resultArr.slice(1, -1)
// 		: resultArr.some((val) => val.includes(' '))
// 		? resultArr.reduce((acc: string[], curr) => {
// 				curr.includes(' ') ? acc.push(curr) : acc

// 				return acc
// 		  }, [])
// 		: resultArr
