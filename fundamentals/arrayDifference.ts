function arrayDiff(a: number[], b: number[]) {
	return a.length === 0
		? []
		: b.length === 0
		? a
		: a.reduce((acc: number[], curr) => {
				b.includes(curr) ? acc : acc.push(curr)

				return acc
		  }, [])
}

export { arrayDiff }
