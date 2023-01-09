function parseFloat(s: string) {
	return isNaN(Number(s)) === true ? null : Number(s)
}

export { parseFloat }
