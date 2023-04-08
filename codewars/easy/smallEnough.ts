function smallEnough(a: number[], limit: number) {
	return Math.max(...a) <= limit ? true : false
}

export { smallEnough }
