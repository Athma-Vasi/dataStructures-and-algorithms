//fails random tests with unknown args

function speakEnglish(sentence: string) {
	const english = 'ENGLISHenglish'

	const strippedSentence = sentence
		.split('')
		.reduce((acc, curr) => (english.includes(curr) ? (acc += curr) : acc), '')

	return (
		strippedSentence.toLowerCase() === 'english' ||
		strippedSentence.toUpperCase() === 'ENGLISH'
	)
}

export { speakEnglish }
