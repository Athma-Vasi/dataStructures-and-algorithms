function fillHDD(sizes: number[], hd: number) {
	let total = 0
	let idx = 0

	do {
		total += sizes[idx]
		idx += 1
	} while (total <= hd)

	return idx - 1
}

export { fillHDD }
