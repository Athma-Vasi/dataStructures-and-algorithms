function fireOnTheBoat(str: string) {
	return str
		.split(' ')
		.reduce((acc, curr) => {
			curr === 'Fire' ? (acc += '~~') : (acc += curr)
			acc += ' '

			return acc
		}, '')
		.split(' ')
		.slice(0, -1)
		.join(' ')
}

export { fireOnTheBoat }
