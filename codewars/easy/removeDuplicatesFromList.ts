//error on codewars side
//File '/runner/typings/mocha/index.d.ts' not found.
// <reference path="/runner/typings/mocha/index.d.ts" />

function removeDuplicatesFromList(a: number[]) {
	return Array.from(new Set(a))
}

export { removeDuplicatesFromList }
