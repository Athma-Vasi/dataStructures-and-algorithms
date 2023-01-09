function reverseList(list: unknown[]) {
	return list.reduceRight((acc: unknown[], curr) => {
		acc.push(curr)

		return acc
	}, [])
}

export { reverseList }
