function maxStackSize(): any {
	try {
		return 1 + maxStackSize()
	} catch (err) {
		return 1
	}
}

console.log(maxStackSize())
