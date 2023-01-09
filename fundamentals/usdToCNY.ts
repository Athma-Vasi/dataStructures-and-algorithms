function usdToCNY(usd: number) {
	return `${Number(usd * 6.75).toFixed(2)} Chinese Yuan`
}

export { usdToCNY }
