function memoizedFibonacci(n: number, memo = new Map()) {
	if (memo.has(n)) return memo.get(n)
	if (n === 0) return 0
	if (n === 1 || n === 2) return 1

	memo.set(n, memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo))

	return memo.get(n)
}

export { memoizedFibonacci }
