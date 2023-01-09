function xor(a: boolean, b: boolean) {
	return !a && !b ? false : a && !b ? true : !a && b ? true : false
}

export { xor }
