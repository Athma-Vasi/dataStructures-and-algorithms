import {
	assert,
	assertEquals,
	equal,
} from 'https://deno.land/std@0.160.0/testing/asserts.ts'

class Vector extends Array {
	components: number[]
	length: number

	constructor(components: number[]) {
		super()
		this.components = [...components]
		this.length = this.components.length
	}

	add(vec2: Vector): number[] | Error {
		return this.length !== vec2.length
			? new Error('vectors must have identical lengths')
			: vec2.reduce((acc: number[], num, idx) => {
					acc.push(num + this.components[idx])

					return acc
			  }, [])
	}

	subtract(vec2: Vector): number[] | Error {
		return this.length !== vec2.length
			? new Error('vectors must have identical lengths')
			: vec2.reduce((acc: number[], num, idx) => {
					acc.push(num - this.components[idx])

					return acc
			  }, [])
	}

	dot(vec2: Vector): number | Error {
		return this.length !== vec2.length
			? new Error('vectors must have identical lengths')
			: vec2.reduce((acc: number, num, idx) => (acc += num ** this.components[idx]), 0)
	}

	norm(): number {
		return Math.sqrt(this.components.reduce((acc, num) => (acc += num ** 2), 0))
	}

	toString(): string {
		return `(${this.components})`
	}

	equals(vec2: Vector): boolean {
		return this.components === JSON.parse(JSON.stringify(vec2))
	}
}

let a = new Vector([1, 2])
let b = new Vector([3, 4])
Deno.test('Vector class test', () => {
	assert(a.equals(b))
})
