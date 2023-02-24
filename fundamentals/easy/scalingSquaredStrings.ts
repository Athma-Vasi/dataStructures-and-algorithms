function scale(s: string, k: number, n: number) {
	return s === ''
		? ''
		: s
				.split('\n')
				.reduce((acc: string[], curr) => {
					let horStr = ''
					curr.split('').forEach((char) => (horStr += char.repeat(k)))

					for (let i = 0; i < n; i += 1) acc.push(horStr)

					return acc
				}, [])
				.join('\n')
}

export { scale }
