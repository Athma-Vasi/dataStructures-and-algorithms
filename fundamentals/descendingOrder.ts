function descendingOrder(n: number) {
	return n.toString().length === 1
		? n
		: Number(
				n
					.toString()
					.split('')
					.sort((a, b) => Number(b) - Number(a))
					.join('')
		  )
}

export { descendingOrder }
