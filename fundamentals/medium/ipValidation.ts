// import { assertEquals } from 'https://deno.land/std@0.160.0/testing/asserts.ts'

function ipValidation(str: string) {
	if (str === '') return false
	if (!str.includes('.') || str.length > 15) return false
	if (str.split('').reduce((acc, curr) => (curr === '.' ? (acc += 1) : acc), 0) !== 3)
		return false

	const allowedChars = '0123456789.'

	return str
		.split('.')
		.reduce((acc: boolean[], curr) => {
			let isValidOctet = true

			curr === '' ? (isValidOctet = false) : isValidOctet

			curr
				.split('')
				.forEach((char) =>
					allowedChars.includes(char) ? isValidOctet : (isValidOctet = false)
				)

			curr.length > 3 ? (isValidOctet = false) : isValidOctet

			curr[0] === '0' && curr.length !== 1 ? (isValidOctet = false) : isValidOctet

			Number.isNaN(Number(curr)) || Number(curr) > 255
				? (isValidOctet = false)
				: isValidOctet

			isValidOctet ? acc.push(true) : acc.push(false)

			return acc
		}, [])
		.includes(false)
		? false
		: true
}

export { ipValidation }

/*
Deno.test('TRUEs: 0.0.0.0', () => {
	assertEquals(ipValidation('0.0.0.0'), true)
})

Deno.test('TRUEs: 12.255.56.1', () => {
	assertEquals(ipValidation('12.255.56.1'), true)
})

Deno.test('TRUEs: 137.255.156.100', () => {
	assertEquals(ipValidation('137.255.156.100'), true)
})

Deno.test('empty string', () => {
	assertEquals(ipValidation(''), false)
})

Deno.test('123.456.789.0', () => {
	assertEquals(ipValidation('123.456.789.0'), false)
})

Deno.test('12.34.56', () => {
	assertEquals(ipValidation('12.34.56'), false)
})

Deno.test('abc.def.ghi.jkl', () => {
	assertEquals(ipValidation('abc.def.ghi.jkl'), false)
})

Deno.test('01.02.03.04', () => {
	assertEquals(ipValidation('01.02.03.04'), false)
})

Deno.test('256.1.2.3', () => {
	assertEquals(ipValidation('256.1.2.3'), false)
})

Deno.test('1.2.3.4.5', () => {
	assertEquals(ipValidation('1.2.3.4.5'), false)
})

Deno.test('1e0.1e1.1e2.2e2', () => {
	assertEquals(ipValidation('1e0.1e1.1e2.2e2'), false)
})

Deno.test('123,45,67,89', () => {
	assertEquals(ipValidation('123,45,67,89'), false)
})

Deno.test(' 1.2.3.4', () => {
	assertEquals(ipValidation(' 1.2.3.4'), false)
})

Deno.test('1.2.3.4 ', () => {
	assertEquals(ipValidation('1.2.3.4 '), false)
})

Deno.test('12.34.56.-7', () => {
	assertEquals(ipValidation('12.34.56.-7'), false)
})

Deno.test('1.2.3.4\n', () => {
	assertEquals(ipValidation('1.2.3.4\n'), false)
})

Deno.test('\n1.2.3.4', () => {
	assertEquals(ipValidation('\n1.2.3.4'), false)
})
*/
