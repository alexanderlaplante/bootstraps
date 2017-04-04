'use strict';

import Car from '../src/car'
import Cars from '../src/cars'
	

describe("addCars", () => {
	test("adds cars to the carlist", () => {
		const tesla = new Car('Tesla', 2017, 'White');
		const hooptie = new Car('Crysler', 1989, 'Black');

		const cars = new Cars();	
		cars.addCars(tesla, hooptie)

		const result = cars.getCars();
		expect(result.length).toEqual(2);
		expect(result).toContain(tesla);
	});
});
