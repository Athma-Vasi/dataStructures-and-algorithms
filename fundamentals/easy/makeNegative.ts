function makeNegative(num: number): number {
	return num > 0 ? num * -1 : num < 0 ? num : 0
}

export { makeNegative }
