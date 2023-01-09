function integerDifference(arr: number[], n: number) {
	let count = 0

	for (let i = 0; i < arr.length; i += 1) {
		for (let j = i; j < arr.length; j += 1) {
			if (i !== j) Math.abs(arr[i] - arr[j]) === n ? (count += 1) : count
		}
	}

	return count
}

console.log(integerDifference([1, 1, 5, 6, 9, 16, 27], 4))
