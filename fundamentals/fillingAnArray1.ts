function fillingAnArray(n: number) {
	const arr: number[] = new Array(n)

	for (let i = 0; i < n; i += 1) arr[i] = i

	return arr
}

export { fillingAnArray }
