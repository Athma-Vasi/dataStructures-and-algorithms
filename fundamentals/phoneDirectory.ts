function phoneDirectory(str: string, num: string) {
	// range fn is used to populate a pool of allowed chars to remove unallowed ones
	function range(start: number, stop: number, step: number) {
		return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
	}

	const phoneChars = `-+${range(0, 9, 1).join('')}`
	const nameChars = ` '${range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1)
		.map((x) => String.fromCharCode(x))
		.join('')}${range('a'.charCodeAt(0), 'z'.charCodeAt(0), 1)
		.map((x) => String.fromCharCode(x))
		.join('')}`
	const addressChars = `.-${nameChars}${range(0, 9, 1).join('')}`

	//map of phone nums is created to facilitate easier searching of req num
	const phoneDirMap = str
		.split('\n')
		.reduce((acc: Map<string, Map<string, string>>, curr: string) => {
			//to avoid regex, these flags are used to parse the string
			let isName = false
			let isPhoneNum = false
			let isAddress = false

			let [name, address, phoneNum] = curr.split('').reduce(
				(acc, curr) => {
					isName ? (acc[0] += curr) : acc[0]
					isAddress ? (acc[1] += curr) : acc[1]
					isPhoneNum ? (acc[2] += curr) : acc[2]

					if (curr === '<') {
						isName = true
						isPhoneNum = false
						isAddress = false
					}
					if (curr === '>') isName = false
					if (curr === '+') {
						isPhoneNum = true
						isName = false
						isAddress = false
					}
					if (curr === ' ' && !isName) {
						isAddress = true
						isName = false
						isPhoneNum = false
					}

					return acc
				},
				['', '', '']
			)
			//sanitizes name, address and phoneNum by checking with aforementioned pool
			name = name
				.split('')
				.reduce((acc, curr) => (nameChars.includes(curr) ? (acc += curr) : acc), '')

			address = address
				.split('')
				.reduce(
					(acc, curr) =>
						addressChars.includes(curr)
							? (acc += curr)
							: curr === '_'
							? (acc += ' ')
							: acc,
					''
				)
				.split('  ')
				.join(' ')
				.trim()

			phoneNum = phoneNum
				.split('')
				.reduce((acc, curr) => (phoneChars.includes(curr) ? (acc += curr) : acc), '')

			//special 'error' key is created if num already present with a duplicateNums
			//key that contains pool of duplicate numbers for easier checking
			acc.get('error') ?? acc.set('error', new Map([['duplicateNums', '']]))
			let errorStr = acc.get('error')?.get('duplicateNums') ?? ''

			acc.has(phoneNum)
				? acc.get('error')?.set('duplicateNums', (errorStr += phoneNum))
				: acc.set(
						phoneNum,
						new Map([
							['name', name],
							['address', address],
							['phoneNum', phoneNum],
						])
				  )

			return acc
		}, new Map())

	if (phoneDirMap.get('error')?.get('duplicateNums')?.includes(num))
		return `Error => Too many people: ${num}`

	if (!phoneDirMap.has(num)) return `Error => Not found: ${num}`

	const phoneDirData = phoneDirMap.get(num) ?? new Map()

	return `Phone => ${phoneDirData.get('phoneNum')}, Name => ${phoneDirData.get(
		'name'
	)}, Address => ${phoneDirData.get('address')}`
}

export { phoneDirectory }
