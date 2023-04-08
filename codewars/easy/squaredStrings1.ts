function vertMirror(str: string) {
	return str
		.split('\n')
		.reduce((acc, curr) => {
			acc += curr.split('').reduceRight((acc_, curr_) => (acc_ += curr_), '')
			acc += '\n'

			return acc
		}, '')
		.split('')
		.slice(0, -1)
		.join('')
}

function horMirror(str: string) {
	return str
		.split('\n')
		.reduceRight((acc, curr) => {
			acc += curr
			acc += '\n'

			return acc
		}, '')
		.split('')
		.slice(0, -1)
		.join('')
}

function oper(fct: (s: string) => string, s: string) {
	return fct(s)
}

export { oper, vertMirror, horMirror }
