function toCsvText(array: number[][]) {
	return array
		.reduce((acc: string[], curr: number[]) => {
			const temp: number[] = []
			curr.forEach((num) => temp.push(num))
			acc.push(temp.join(','))

			return acc
		}, [])
		.join('\n')
}

export { toCsvText }
