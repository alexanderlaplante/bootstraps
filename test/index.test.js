'use strict';

import Example from '../src/index'

describe("index", () => {
	test("returns an example const", () => {
		const result = Example();	
		expect(result).toEqual("ExampleConst");
	});
});
