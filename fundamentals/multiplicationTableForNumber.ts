function multiTable(number: number) {
	const table: string[] = []

	for (let i = 1; i <= 10; i += 1) table.push(`${i} * ${number} = ${i * number}`)

	return table.join('\n')
}

export { multiTable }
