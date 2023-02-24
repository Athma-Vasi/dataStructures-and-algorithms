function twoSum(nums: number[], target: number) {
	let leftPointer = 0
	let rightPointer = nums.length - 1

	while (
		nums[leftPointer] + nums[rightPointer] !== target &&
		leftPointer !== rightPointer
	) {
		nums[leftPointer] + nums[rightPointer] > target
			? (rightPointer -= 1)
			: (leftPointer += 1)
	}

	return leftPointer === rightPointer ? [-1] : [leftPointer + 1, rightPointer + 1]
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([-1, 0], -1))
