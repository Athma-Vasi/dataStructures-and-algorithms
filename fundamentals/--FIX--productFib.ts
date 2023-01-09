//Works but invalid size error 79295393
//need the memoized version

function productFib(prod: number) {
	const series = [0, 1]
	for (let i = 2; i <= prod; i += 1) series.push(series[i - 2] + series[i - 1])

	const resultArr: unknown[] = []
	for (let i = 1; i < series.length; i += 1) {
		series[i - 1] * series[i] === prod
			? resultArr.push(series[i - 1]) && resultArr.push(series[i]) && resultArr.push(true)
			: series[i - 1] * series[i] < prod && series[i] * series[i + 1] > prod
			? resultArr.push(series[i]) &&
			  resultArr.push(series[i + 1]) &&
			  resultArr.push(false)
			: resultArr
	}

	return series
}

// console.log(productFib(4895))
// console.log(productFib(5895))
// console.log(productFib(74_049_690))
// console.log(productFib(84_049_690))
// console.log(productFib(193_864_606))

//length of series is always prod+1
