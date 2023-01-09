function decipherThis(str: string) {
	return str
		.split(' ')
		.reduce((acc, curr) => {
			const charCode = curr
				.split('')
				.reduce((acc, curr) => (!isNaN(Number(curr)) ? (acc += curr) : acc), '')

			const firstStr = String.fromCharCode(Number(charCode))

			const scrambledStr =
				charCode.length === curr.length ? '' : curr.slice(charCode.length)

			const unscrambledStr =
				scrambledStr === ''
					? ''
					: scrambledStr.length > 1
					? `${scrambledStr[scrambledStr.length - 1]}${scrambledStr.slice(1, -1)}${
							scrambledStr[0]
					  }`
					: scrambledStr

			acc += `${firstStr}${unscrambledStr} `

			return acc
		}, '')
		.slice(0, -1)
}

export { decipherThis }
