function slowRecSum(arr: number[]): number {
	return arr.length === 0 ? 0 : arr[0] + slowRecSum(arr.slice(1))
}

console.log(slowRecSum([1, 5, 7, -2]))

// Time: O(n^2)
// Space: O(n)

function fastRecSum(arr: number[]) {
	return helper(arr, 0)
}

function helper(arr: number[], idx: number): number {
	return idx === arr.length ? 0 : arr[idx] + helper(arr, idx + 1)
}

console.log(fastRecSum([1, 5, 7, -2]))

// Time: O(n)
// Space: O(n)

const input: number[] = new Array(9000).fill(1)

Deno.bench('slowRecSum', () => {
	slowRecSum(input)
})

Deno.bench('fastRecSum', () => {
	fastRecSum(input)
})
