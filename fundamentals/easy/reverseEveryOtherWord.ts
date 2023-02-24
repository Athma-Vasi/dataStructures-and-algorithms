function reverseEveryOtherWord(str: string) {
	return str === ''
		? ''
		: str
				.split(' ')
				.reduce((acc: string[], curr, idx) => {
					idx % 2 === 0 ? acc.push(curr) : acc.push(curr.split('').reverse().join(''))

					return acc
				}, [])
				.join(' ')
				.trim()
}

export { reverseEveryOtherWord }
