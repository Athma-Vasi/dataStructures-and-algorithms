function compareStrBySumOfChars(s1: string | null, s2: string | null) {
	const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

	const s1CodeSum =
		s1 === null
			? ''
			: s1 === ''
			? ''
			: s1
					?.split('')
					.reduce(
						(acc, curr) =>
							(acc += !alphabetUpper.includes(curr.toUpperCase())
								? Infinity
								: curr.toUpperCase().charCodeAt(0)),
						0
					)
	const s2CodeSum =
		s2 === null
			? ''
			: s2 === ''
			? ''
			: s2
					?.split('')
					.reduce(
						(acc, curr) =>
							(acc += !alphabetUpper.includes(curr.toUpperCase())
								? Infinity
								: curr.toUpperCase().charCodeAt(0)),
						0
					)

	return s1CodeSum === Infinity && s2CodeSum === ''
		? true
		: s1CodeSum === '' && s2CodeSum === Infinity
		? true
		: s1CodeSum === s2CodeSum
}

export { compareStrBySumOfChars }
