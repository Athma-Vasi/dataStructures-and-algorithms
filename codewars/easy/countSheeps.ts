function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
	return arrayOfSheep.reduce((acc, curr) => {
		curr === null || curr === undefined ? acc : curr === true ? (acc += 1) : acc

		return acc
	}, 0)
}

export { countSheeps }
