function order(words: string) {
	if (words === '') return ''

	return words
		.split(' ')
		.sort((a, b) => Number(a.replace(/[^0-9]/g, '')) - Number(b.replace(/[^0-9]/g, '')))
		.join(' ')
}

export { order }
