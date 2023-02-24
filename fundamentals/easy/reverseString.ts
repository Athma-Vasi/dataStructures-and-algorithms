function reverseString(str: string) {
	return str.split('').reduceRight((acc, curr) => (acc += curr), '')
}

export { reverseString }
