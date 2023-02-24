function safeInteger(n: number) {
	return n < Number.MAX_SAFE_INTEGER ? true : false
}

export { safeInteger }
