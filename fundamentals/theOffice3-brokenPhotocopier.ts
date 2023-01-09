function brokenPhotocopier(binaryStr: string) {
	return binaryStr
		.split('')
		.reduce((acc, curr) => (curr === '0' ? (acc += '1') : (acc += '0')), '')
}

export { brokenPhotocopier }
