function htmlSpecialChars(formData: string) {
	const charMap = new Map([
		['<', '&lt;'],
		['>', '&gt;'],
		['"', '&quot;'],
		['&', '&amp;'],
	])

	return formData
		.split('')
		.map((char) => charMap.get(char) ?? char)
		.join('')
}

export { htmlSpecialChars }
