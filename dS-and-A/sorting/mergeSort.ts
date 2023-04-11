export function merge(list1: number[], list2: number[]) {
	const results: number[] = []
	let i = 0
	let j = 0

	while (i < list1.length && j < list2.length) {
		if (list1[i] < list2[j]) {
			results.push(list1[i++])
		} else {
			results.push(list2[j++])
		}
	}

	return results.concat(list1.slice(i), list2.slice(j))
}

export function mergeSort(list: number[]): number[] {
	if (list.length < 2) return list

	const listHalf = Math.floor(list.length / 2)
	const subList1 = list.slice(0, listHalf)
	const subList2 = list.slice(listHalf, list.length)

	return merge(mergeSort(subList1), mergeSort(subList2))
}

const testArr = [1, 3, 9, 5, 0, 2]
console.log(mergeSort(testArr))

function mergeSort2(array: number[]): number[] {
	if (!Array.isArray(array)) throw new TypeError('Must be an array!')
	if (array.length < 2) return array

	const halfLength = Math.floor(array.length / 2)
	const leftHalf = array.slice(0, halfLength)
	const rightHalf = array.slice(halfLength, array.length)

	return merge2(mergeSort2(leftHalf), mergeSort2(rightHalf))
}

function merge2(arr1: number[], arr2: number[]) {
	const results: number[] = []
	let i = 0
	let j = 0

	while (i < arr1.length && j < arr2.length)
		arr1[i] < arr2[j]
			? results.push(arr1[i]) && (i += 1)
			: results.push(arr2[j]) && (j += 1)

	return results.concat(arr1.slice(i), arr2.slice(j))
}

console.log(mergeSort2(testArr))
