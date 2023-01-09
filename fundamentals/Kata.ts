class Kata {
	static highAndLow(numbers: string): string {
		const numArr = numbers.split(' ').reduce((acc: number[], curr) => {
			acc.push(Number(curr))

			return acc
		}, [])

		return `${Math.max(...numArr)} ${Math.min(...numArr)}`
	}

	static disemvowel(str: string): string {
		const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

		return str.split('').reduce((acc, curr) => {
			vowels.includes(curr) ? acc : (acc += curr)

			return acc
		}, '')
	}

	static squareDigits(num: number): number {
		return Number(
			num
				.toString()
				.split('')
				.reduce((acc, curr) => {
					acc += Number(curr) * Number(curr)

					return acc
				}, '')
		)
	}

	static opposite(n: number) {
		return n * -1
	}

	static getCount(str: string): number {
		const vowelsArr = ['a', 'e', 'i', 'o', 'u']

		return str
			.toLowerCase()
			.split('')
			.reduce((acc, curr) => {
				vowelsArr.includes(curr) ? (acc += 1) : acc

				return acc
			}, 0)
	}

	static dnaStrand(dna: string) {
		const dnaMap = new Map([
			['A', 'T'],
			['T', 'A'],
			['G', 'C'],
			['C', 'G'],
		])

		return dna
			.split('')
			.map((letter) => dnaMap.get(letter))
			.join('')
	}

	static validatePin(pin: string) {
		const regex4 = new RegExp(/^\d{4}$/)
		const regex6 = new RegExp(/^\d{6}$/)
		return regex4.test(pin) || regex6.test(pin)
	}

	//keeps failing randomtests but passes basic tests
	static findLongest(array: number[]) {
		let longest = -Infinity
		array.forEach((value, _) => {
			longest > value ? longest : (longest = value)
		})
		return longest
	}
}

export { Kata }
