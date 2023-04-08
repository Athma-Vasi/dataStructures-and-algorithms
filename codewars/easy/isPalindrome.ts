//passes everything except a 'random test' which does not reveal the
//argument passed in

function isPalindrome(line: string) {
	const reversed = line.split('').reverse().join('')

	return line.split('').reduce((acc, curr, idx) => {
		curr === reversed[idx] ? (acc = true) : (acc = false)

		return acc
	}, true)
}

export { isPalindrome }
