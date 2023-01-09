function makeLooper(str: string) {
	const funcGenerator = (function* () {
		while (true) {
			for (const char of str) yield char
		}
	})()

	return () => funcGenerator.next().value
}

const abc = makeLooper('abc')
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())
