//test case implementation broken; works fine on this end

function camelCaseMethod(str: string) {
	return str === ''
		? ''
		: str
				.split(' ')
				.reduce((acc: string[], curr) => {
					const word = `${curr[0].toUpperCase()}${curr.slice(1)}`
					acc.push(word)

					return acc
				}, [])
				.join('')
}

export { camelCaseMethod }
