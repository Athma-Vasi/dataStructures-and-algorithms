//'%' does not return the right binary representation

function unaryMsgSend(text: string) {
	const binaryArr = text.includes(' ')
		? strToBinaryArr(text)
		: [strToBinaryArr(text).join('')]
	// const binaryArr = [strToBinaryArr(text).join('')]

	const bitCountTuplesArr: [string, number][][] = binaryArr.map((_) => [])

	for (let i = 0; i < binaryArr.length; i += 1) {
		let bitCounter = 1

		for (let j = 1; j < binaryArr[i].length; j += 1) {
			if (binaryArr[i][j - 1] === binaryArr[i][j]) {
				bitCounter += 1

				//grabs the last duplicate bits
				if (j === binaryArr[i].length - 1) {
					bitCountTuplesArr[i].push([binaryArr[i][j], bitCounter])
				}
			} else {
				bitCountTuplesArr[i].push([binaryArr[i][j - 1], bitCounter])
				bitCounter = 1

				//grabs the last duplicate bits
				if (j === binaryArr[i].length - 1) {
					bitCountTuplesArr[i].push([binaryArr[i][j], bitCounter])
				}
			}
		}
	}
	// return bitCountTuplesArr

	return bitCountTuplesArr
		.reduce((message: string[], tuplesArr: [string, number][]) => {
			tuplesArr.forEach(([bit, count]: [string, number]) => {
				if (bit === '1') {
					message.push('0')
					message.push('0'.repeat(count))
				} else {
					message.push('00')
					message.push('0'.repeat(count))
				}
			})

			return message
		}, [])
		.join(' ')
}

function strToBinaryArr(str = '') {
	return str.split('').map((char) => char.charCodeAt(0).toString(2))
}

// console.log(unaryMsgSend('Hello World'))
// console.log(unaryMsgSend('C'))
console.log(unaryMsgSend('%'))

// console.log(unaryMsgSend('%') === '00 0 0 0 00 00 0 0 00 0 0 0')
// console.log(unaryMsgSend('CC') === '0 0 00 0000 0 000 00 0000 0 00')
//	'0 0 00 0000 0 000 00 0000 0 00'
// console.log(
// unaryMsgSend("Chuck Norris' keyboard has 2 keys: 0 and white space.") ===
// '0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00 00 0 0 0 00 00000 0 0 00 00 0 000 00 0 0 00 00 0 0 0000000 00 00 0 0 00 0 0 000 00 00 0 0 00 0 0 00 00 0 0 0 00 00 0 0000 00 00 0 00 00 0 0 0 00 00 0 000 00 0 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 000 00 000 0 0 00 0 0 00 00 0 0 000000 00 0000 0 0000 00 00 0 0 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 00 00 0 0 0 00 000 0 00 00 0000 0 0000 00 00 0 00 00 0 0 0 00 000000 0 00 00 00 0 0 00 00 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 0000 00 00 0 00 00 0 0 000 00 0 0 0 00 00 0 0 00 000000 0 00 00 00000 0 0 00 00000 0 00 00 0000 0 000 00 0 0 000 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 000 00 0 0 00000 00 0 0 0 00 000 0 00 00 0 0 0 00 00 0 0000 00 0 0 0 00 00 0 00 00 00 0 0 00 0 0 0 00 0 0 0 00 00000 0 000 00 00 0 00000 00 0000 0 00 00 0000 0 000 00 000 0 0000 00 00 0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0'
// )
//	"0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00 00 0 0 0 00 00000 0 0 00 00 0 000 00 0 0 00 00 0 0 0000000 00 00 0 0 00 0 0 000 00 00 0 0 00 0 0 00 00 0 0 0 00 00 0 0000 00 00 0 00 00 0 0 0 00 00 0 000 00 0 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 000 00 000 0 0 00 0 0 00 00 0 0 000000 00 0000 0 0000 00 00 0 0 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 00 00 0 0 0 00 000 0 00 00 0000 0 0000 00 00 0 00 00 0 0 0 00 000000 0 00 00 00 0 0 00 00 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 0000 00 00 0 00 00 0 0 000 00 0 0 0 00 00 0 0 00 000000 0 00 00 00000 0 0 00 00000 0 00 00 0000 0 000 00 0 0 000 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 000 00 0 0 00000 00 0 0 0 00 000 0 00 00 0 0 0 00 00 0 0000 00 0 0 0 00 00 0 00 00 00 0 0 00 0 0 0 00 0 0 0 00 00000 0 000 00 00 0 00000 00 0000 0 00 00 0000 0 000 00 000 0 0000 00 00 0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0"
