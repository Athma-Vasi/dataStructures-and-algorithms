function mirrorObject(obj: Record<string, unknown>) {
	return Object.fromEntries(
		Object.entries(obj).reduce((acc: Map<string, string>, curr: [string, unknown]) => {
			curr[1] === undefined
				? acc.set(curr[0], curr[0].split('').reverse().join(''))
				: curr

			return acc
		}, new Map())
	)
}
const obj = { abc: undefined }

export { mirrorObject }
