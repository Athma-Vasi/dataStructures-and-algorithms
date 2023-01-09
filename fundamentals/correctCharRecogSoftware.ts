function correctCharRecogSoftware(s: string) {
	return s.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I')
}

export { correctCharRecogSoftware }
