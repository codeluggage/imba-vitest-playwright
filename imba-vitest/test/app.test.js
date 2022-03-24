
/*body*/
import {assert,expect,test} from 'vitest'/*$path$*/;
import {answer} from './app'/*$path$*/;

test('Math.sqrt()',function() {
	
	expect(Math.sqrt(4)).toBe(2);
	expect(Math.sqrt(144)).toBe(12);
	return expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test('JSON',function() {
	
	// const input = {
	// 	foo: 'hello',
	// 	bar: 'world2',
	// }
	const input = {
		foo: 'hello',
		bar: 'world'
	};
	
	const output = JSON.stringify(input);
	
	expect(output).eq('{"foo":"hello","bar":"world"}');
	return assert.deepEqual(JSON.parse(output),input,'matches original');
});

test('answer',function() {
	
	expect(answer(42)).toBe(true);
	expect(answer(-42)).toBe(true);
	expect(answer(0)).toBe(false);
	expect(answer(undefined)).toBe(false);
	return expect(answer(null)).toBe(false);
});

//# sourceMappingURL=app.test.js.map