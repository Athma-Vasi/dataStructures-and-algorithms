function getMiddle(s: string): string {
	return s === ''
		? ''
		: s.length % 2 === 0
		? `${s[s.length / 2 - 1]}${s[s.length / 2]}`
		: `${s[Math.floor(s.length / 2)]}`
}

export { getMiddle }
