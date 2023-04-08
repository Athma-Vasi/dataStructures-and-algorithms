function say(string1: string) {
	return function (string2: string) {
		return `${string1} ${string2}`
	}
}

export { say }
