function memoize(func: (_: any) => any, resolver?: (_: any) => any): any {
	const cache: Map<any, any> = new Map()

	return function (...args: any[]) {
		const key = resolver ? resolver.apply(this, args) : args[0]

		if (cache.has(key)) {
			return cache.get(key)
		}

		const result = func.apply(this, args)
		cache.set(key, result)

		return result
	}
}

export { memoize }
