function bmi(
	weight: number,
	height: number
): 'Obese' | 'Normal' | 'Overweight' | 'Underweight' {
	const bmi_ = weight / (height * height)

	return bmi_ < 18.5
		? 'Underweight'
		: bmi_ < 25.0
		? 'Normal'
		: bmi_ < 30.0
		? 'Overweight'
		: 'Obese'
}

export { bmi }
