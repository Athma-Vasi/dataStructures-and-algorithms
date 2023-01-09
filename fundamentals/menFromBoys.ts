function menFromBoys(arr: number[]) {
	return [
		...Array.from(new Set([...arr.filter((num) => num % 2 === 0).sort((a, b) => a - b)])),
		...Array.from(new Set([...arr.filter((num) => num % 2 !== 0).sort((a, b) => b - a)])),
	]
}

export { menFromBoys }
