function DNAtoRNA(dna: string): string {
	const dnaMap = new Map([['T', 'U']])

	return dna === ''
		? ''
		: dna
				.split('')
				.map((string) => (string === 'T' ? dnaMap.get('T') : string))
				.join('')
}

export { DNAtoRNA }
