function lineNumbering(array: string[]): string[] {
	return array.map((value, idx) => `${(idx += 1)}: ${value}`)
}

export { lineNumbering }
