class G964 {
	public static nbDig(n: number, d: number) {
		const tempArr: number[] = []
		for (let i = 0; i <= n; i += 1) tempArr.push(i)

		const squaredArr = tempArr.reduce((acc: number[], curr) => {
			acc.push(curr * curr)

			return acc
		}, [])

		return squaredArr.reduce((acc, curr) => {
			curr
				.toString()
				.split('')
				.forEach((value) => (value === d.toString() ? (acc += 1) : acc))

			return acc
		}, 0)
	}

	public static digPow(n: number, p: number) {
		let tempArr: number[] = []
		for (let i = 0; i < n.toString().length; i += 1) {
			tempArr.push(Number(n.toString()[i]) ** (p + i))
		}

		const total = tempArr.reduce((acc, curr) => (acc += curr), 0)
		return (total / n) % 1 === 0 ? total / n : -1
	}
}

export { G964 }
