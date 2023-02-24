function findThePosition(alphabet: string) {
	const alphabets = `abcdefghijklmnopqrstuvwxyz`
	const alphabetsMap: Map<string, number> = new Map()

	alphabets.split('').forEach((char, idx) => alphabetsMap.set(char, (idx += 1)))

	return `Position of alphabet: ${alphabetsMap.get(alphabet)}`
}

export { findThePosition }
