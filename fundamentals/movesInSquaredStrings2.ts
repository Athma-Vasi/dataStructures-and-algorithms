function rot(s: string) {
	return s
		.split('\n')
		.reduceRight((acc: string[], curr) => {
			const temp = curr.split('').reduceRight((acc, curr) => (acc += curr), '')
			acc.push(temp)

			return acc
		}, [])
		.join('\n')
}

function selfieAndRot(s: string) {
	const numOfDots = s.split('\n')[0].length

	return (
		s
			.split('\n')
			.reduce((acc: string[], curr) => {
				let temp = ''
				temp += curr
				temp += '.'.repeat(numOfDots)
				acc.push(temp)

				return acc
			}, [])
			.join('\n') +
		'\n' +
		'.'.repeat(numOfDots) +
		rot(s)
			.split('\n')
			.reduce((acc: string[], curr, idx) => {
				let temp = ''

				if (idx === 0) acc.push(curr)
				else {
					temp += '.'.repeat(numOfDots)
					temp += curr
					acc.push(temp)
				}

				return acc
			}, [])
			.join('\n')
	)
}

function oper(fn: (s: string) => string, s: string) {
	return fn(s)
}

export { rot, selfieAndRot, oper }
