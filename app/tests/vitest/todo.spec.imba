import { Todo } from '../../client/todo'
import { expect, test, describe } from 'vitest'

describe 'when creating a todo', do
	test 'it is not done', do
		// Arrange
		const todo = new Todo()

		// Act
		const actual = todo.done

		// Assert
		expect(actual).toBe no
