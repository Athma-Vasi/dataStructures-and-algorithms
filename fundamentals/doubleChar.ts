function _doubleChar(str: string, strDbl = '', idx = 1): string {
	return strDbl.length === str.length * 2
		? strDbl
		: _doubleChar(
				str,
				strDbl
					.split('')
					.splice(idx, 0, str[idx - 1])
					.join(''),
				(idx += 1)
		  )
}

function doubleChar(str: string) {
	return str.split('').reduce((acc, curr) => {
		acc += curr
		acc += curr

		return acc
	}, '')
}

export { doubleChar }
