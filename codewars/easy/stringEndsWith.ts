function stringEndsWith(str: string, ending: string) {
	return ending === '' ? true : str.split('').slice(-ending.length).join('') === ending
}

export { stringEndsWith }
