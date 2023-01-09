function helloNameOrWorld(name = '') {
	return name === null || name === undefined
		? 'Hello, World!'
		: name === ''
		? 'Hello, World!'
		: name.split('').reduce((acc, curr, idx) => {
				idx === 0 ? (acc += curr.toUpperCase()) : (acc += curr.toLowerCase())

				return acc
		  }, 'Hello, ') + '!'
}

export { helloNameOrWorld }
