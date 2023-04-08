//stack overflow error; need to optimize for memory

function maximumTripletSum(nums: number[]) {
	const numsNoDuplicates = Array.from(new Set(nums))

	const sumArr: number[] = []

	for (let i = 0; i < numsNoDuplicates.length; i += 1) {
		for (let j = 0; j < numsNoDuplicates.length; j += 1) {
			for (let k = 0; k < numsNoDuplicates.length; k += 1) {
				if (i !== j && j !== k && i !== k) {
					sumArr.push(numsNoDuplicates[i] + numsNoDuplicates[j] + numsNoDuplicates[k])
				}
			}
		}
	}
	return Math.max(...sumArr)
}
export { maximumTripletSum }

/*
console.log(
	maximumTripletSum([
		16553, 3923, 37576, -470, -501, -165, 1459, -206, 155, -10386, 57, -31869, 669, 5, -3,
		-18226, 6213, 0, 16935, -33297, 136, -985, 899, 59847, -3508, -11950, -364, -15,
		-3631, 35923, -756, -9740, 8688, 1560, -34796, -4109, -74, -662, 269, -348, 131,
		-1546, -24501, -3009, 2, 1008, 60, 32441, 5017, 1311, 72, 3020, -394, -585, -20876,
		-13072, 71218, 1763, -47, 148, 471, -6810, -7947, -6015, -39710, 6267, 287, -5147,
		32223, 7396, 465, 2933, 207, 4540, 1171, -11, 8862, -28831, 1022, -30, -468, 181, 59,
		1071, 2525, -13115, 3373, 9, 2225, 71, -1, -96240, -4307, -194, -144, 234, 4593, -59,
		399, 16129, 44, -3479, 4, -110, 761, 4904, 413, 42260, -3, -1808, -319, -7, 4466,
		15176, 57154, -15358, -760, 380, 3215, 43940, 55, 4235, 1, 82, -34, 49, -60645, -195,
		-230, 5426, 6082, -45656, 14236, -91, 26782, 4906, 5067, 0, 14973, 4599, 330, 3406,
		-4462, -548, -3183, 17813, -42768, 498, 4,
	])
)
*/
