import { assert, expect, test } from 'vitest'
import { answer } from './app'

test('Math.sqrt()', do
	expect(Math.sqrt(4)).toBe(2)
	expect(Math.sqrt(144)).toBe(12)
	expect(Math.sqrt(2)).toBe(Math.SQRT2)
)

test('JSON', do
	# const input = {
	# 	foo: 'hello',
	# 	bar: 'world2',
	# }
	const input =
		foo: 'hello'
		bar: 'world'

	const output = JSON.stringify(input)

	expect(output).eq('{"foo":"hello","bar":"world"}')
	assert.deepEqual(JSON.parse(output), input, 'matches original')
)

test('answer', do
	expect(answer(42)).toBe(true)
	expect(answer(-42)).toBe(true)
	expect(answer(0)).toBe(false)
	expect(answer(undefined)).toBe(false)
	expect(answer(null)).toBe(false)
)