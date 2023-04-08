function abbrevName(name: string) {
	const nameArr = name.split(' ')

	return `${nameArr[0][0].toUpperCase()}.${nameArr[1][0].toUpperCase()}`
}

export { abbrevName }
