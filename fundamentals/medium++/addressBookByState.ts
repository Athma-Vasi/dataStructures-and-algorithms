//fails random tests with unknown args

function addressBookByState(str: string) {
	const states = new Map([
		['AZ', 'Arizona'],
		['CA', 'California'],
		['ID', 'Idaho'],
		['IN', 'Indiana'],
		['MA', 'Massachusetts'],
		['OK', 'Oklahoma'],
		['PA', 'Pennsylvania'],
		['VA', 'Virginia'],
	])

	const blankLineRegex = /\n\n/g
	const numOfBlankNewLines = [...str.matchAll(blankLineRegex)].length + 1

	const blankNewLineSplit = str.includes('\n\n')
		? str.split('\n\n').slice(0, numOfBlankNewLines).join('').split('\n')
		: str.split('\n')

	const statesKeyAddressesValues = blankNewLineSplit.reduce(
		(acc: Map<string, string[]>, curr) => {
			const abbrState = curr.split(' ')[curr.split(' ').length - 1]
			const fullStateName = states.get(abbrState) ?? ''
			const addressArr: string[] = acc.get(fullStateName) ?? []

			addressArr.push(curr.split(', ').join(' '))
			acc.set(fullStateName, addressArr)

			return acc
		},
		new Map()
	)

	const sortedStatesAndAddresses = Object.entries(
		Object.fromEntries(statesKeyAddressesValues)
	)
		.reduce((acc: [string, string[]][], [state, addresses]: [string, string[]]) => {
			const sortedAddresses = addresses.sort((a, b) => {
				const aName = a.split(' ')[0]
				const bName = b.split(' ')[0]

				return aName < bName ? -1 : aName > bName ? 1 : 0
			})

			const temp: [string, string[]] = ['', []]
			temp[0] = state
			temp[1] = sortedAddresses
			acc.push(temp)

			return acc
		}, [])
		.sort((a: [string, string[]], b: [string, string[]]) =>
			a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0
		)

	return sortedStatesAndAddresses
		.reduce((acc: string[], [state, addresses]: [string, string[]], idx) => {
			acc.push(idx === 0 ? state : ` ${state}`)

			let addressStr = ''
			addresses.forEach((address) => {
				const addressMinusState = address.split(' ').slice(0, -1).join(' ')
				addressStr = `..... ${addressMinusState} ${state}`
				acc.push(addressStr)
			})

			return acc
		}, [])
		.join('\r\n')
}

export { addressBookByState }
