function rakeZenGarden(garden: string) {
	return garden
		.split(' ')
		.reduce((acc: string[], curr) => {
			curr === 'gravel' || curr === 'rock' ? acc.push(curr) : acc.push('gravel')

			return acc
		}, [])
		.join(' ')
}

export { rakeZenGarden }
