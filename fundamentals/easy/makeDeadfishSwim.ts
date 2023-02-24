function makeDeadfishSwim(data: string) {
	let temp = 0
	return data.split('').reduce((acc: number[], curr) => {
		switch (curr) {
			case 'i': {
				temp += 1
				break
			}
			case 'd': {
				temp -= 1
				break
			}
			case 's': {
				temp = temp ** 2
				break
			}
			case 'o': {
				acc.push(temp)
				break
			}
			default:
				break
		}

		return acc
	}, [])
}

export { makeDeadfishSwim }
