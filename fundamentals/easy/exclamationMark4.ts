function exclamationMark4(s: string) {
	return (
		s.split('').reduce((acc, curr) => {
			curr === '!' ? acc : (acc += curr)

			return acc
		}, '') + '!'
	)
}

export { exclamationMark4 }
