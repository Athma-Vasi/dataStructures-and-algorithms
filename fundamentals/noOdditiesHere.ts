function noOdditiesHere(values: number[]) {
	return values.filter((value) => value % 2 === 0)
}

export { noOdditiesHere }
