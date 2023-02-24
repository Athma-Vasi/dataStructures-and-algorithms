function salesmansTravel(r: string, zipcode: string) {
	const zipMap = r.split(',').reduce((acc: Map<string, string>, curr) => {
		const key = curr
			.split(' ')
			.slice(curr.split(' ').length - 2)
			.join(' ')
		const value = curr.split(' ').slice(0, -2).join(' ')

		acc.get(key) ? acc.set(key, acc.get(key) + ',' + value) : acc.set(key, value)

		return acc
	}, new Map())

	const result = zipMap.get(zipcode)
	const poBox: string[] = []

	return result === undefined
		? `${zipcode}:/`
		: result?.split(',').reduce((acc, curr, idx) => {
				idx === 0 ? (acc += zipcode + ':') : acc
				poBox.push(curr.split(' ')[0])
				acc += curr.split(' ').slice(1).join(' ')

				idx === result.split(',').length - 1 ? acc : (acc += ',')
				idx === result.split(',').length - 1 ? (acc += '/' + poBox.join(',')) : acc

				return acc
		  }, '')
}

export { salesmansTravel }
