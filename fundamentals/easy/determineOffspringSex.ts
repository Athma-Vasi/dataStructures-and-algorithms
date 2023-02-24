function chromosomeCheck(sperm: string) {
	return sperm.includes('Y')
		? "Congratulations! You're going to have a son."
		: "Congratulations! You're going to have a daughter."
}

export { chromosomeCheck }
