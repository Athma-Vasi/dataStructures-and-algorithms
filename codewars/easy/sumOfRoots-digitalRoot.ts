function digitalRoot(n: number) {
	let num = n

	while (num.toString().length > 1) {
		num = num
			.toString()
			.split('')
			.reduce((acc, curr) => (acc += Number(curr)), 0)
	}

	return num
}

console.log(digitalRoot(16))
console.log(digitalRoot(942))
console.log(digitalRoot(132189))
console.log(digitalRoot(493193))
