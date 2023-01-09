//fails on random tests with known args
//passes every other test

function getPages(length: number, currentPage: number, size: number) {
	if (length === 1) return []

	//first and last plus center plus size times two
	const pagesArrLength =
		size * 2 === length ? length : size > length ? length : 2 + 1 + size * 2
	let pagesArr = new Array(pagesArrLength).fill(Infinity)
	pagesArr[0] = 1
	pagesArr[pagesArr.length - 1] = length

	const centerIdxOfPagesArr = Math.ceil(pagesArrLength / 2) - 1

	if (currentPage === length) {
		if (currentPage === 2) return [1, 2]
		else {
			pagesArr = new Array(length - 1).fill(Infinity)
			pagesArr[0] = 1
			pagesArr[pagesArr.length - 1] = length

			let pages = currentPage - 1
			for (let i = pagesArr.length - 2; i > 0; i -= 1) {
				pagesArr[i] = pages
				pages -= 1
			}
		}
	} else {
		if (currentPage <= centerIdxOfPagesArr + 1) {
			for (let i = 1; i < pagesArrLength - 1; i += 1) pagesArr[i] = i + 1
		} else {
			if (currentPage + size < length) {
				pagesArr[centerIdxOfPagesArr] = currentPage

				let pages = currentPage - 1
				for (let i = centerIdxOfPagesArr - 1; i > 0; i -= 1) {
					pagesArr[i] = pages
					pages -= 1
				}

				pages = currentPage + 1
				for (let i = centerIdxOfPagesArr + 1; i < pagesArrLength - 1; i += 1) {
					pagesArr[i] = pages
					pages += 1
				}
			} else {
				const wrap = length - currentPage
				const centerElemOfPagesArr =
					wrap === 1
						? currentPage - size
						: wrap * 2 < size
						? currentPage - wrap * 2
						: currentPage - wrap

				pagesArr[centerIdxOfPagesArr] = centerElemOfPagesArr

				let pages = centerElemOfPagesArr - 1
				for (let i = centerIdxOfPagesArr - 1; i > 0; i -= 1) {
					pagesArr[i] = pages
					pages -= 1
				}

				pages = centerElemOfPagesArr + 1
				for (let i = centerIdxOfPagesArr + 1; i < pagesArrLength - 1; i += 1) {
					pagesArr[i] = pages
					pages += 1
				}
			}
		}
	}

	return pagesArr
}
// console.log(getPages(2, 2, 1))
// console.log(getPages(3, 3, 1))

console.log(getPages(10, 8, 5))
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// console.log(getPages(36, 1, 5))
console.log(getPages(36, 8, 5))
// console.log(getPages(10, 4, 1))
