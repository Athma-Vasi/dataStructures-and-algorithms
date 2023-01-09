function lengthOfLongestSubString(s: string) {
	const strSet: Map<string, number> = new Map()

	let windowStart = 0
	let windowEnd: number
	let maxWindowSize = Number.MIN_SAFE_INTEGER
	// let currentRunningStrLength = 0

	for (windowEnd = 0; windowEnd < s.length; windowEnd += 1) {
		let count = strSet.get(s[windowEnd]) ?? 0

		if (strSet.has(s[windowEnd])) {
			maxWindowSize = Math.max(maxWindowSize, windowEnd - windowStart)
			windowStart += 1
		} else {
			strSet.set(s[windowEnd], (count += 1))
		}
	}

	return maxWindowSize
}

// console.log(lengthOfLongestSubString('abcabcbb'))
// console.log(lengthOfLongestSubString('pwwkew'))

function longestUniqueSubstring(s: string) {
	//  creating a set to store last positions of occurence
	const seen: Map<string, number> = new Map()
	let maxLength = 0

	//  starting the initial point of window to index 0
	let start = 0

	for (let end = 0; end < s.length; end += 1) {
		//  checking if we have already seen the element or not
		if (seen.has(s[end])) {
			//  if we have seen the element, move the start pointer to position after
			//  the last occurence
			start = Math.max(start, (seen.get(s[end]) ?? 0) + 1)
		}
		//  updating the last seen value of the character
		seen.set(s[end], end)
		maxLength = Math.max(maxLength, end - start + 1)
	}

	return maxLength
}

console.log(longestUniqueSubstring('abcabcbb'))
console.log(longestUniqueSubstring('pwwkew'))
