'use strict';

import Car from '../src/car'

describe("car.model=", () => {
	test("sets the car model ", () => {
		const mockCar = new Car("Ford", 2015, "blue");
		mockCar.model = "Tesla";
		expect(mockCar.model).toEqual("Tesla");
	});
});

describe("car.color=", () => {
	test("sets the car color", () => {
		const mockCar = new Car("Tesla", 2017, "white");
		mockCar.color = "black";
		expect(mockCar.color).toEqual("black");
	});
});

describe("car.year=", () => {
	test("sets the car year", () => {
		const mockCar = new Car("Tesla", 2017, "white");
		expect(mockCar.year).toEqual(2017);
	});
});

describe("car.model", () => {
	test("gets the car model", () => {
		const mockCar = new Car("Tesla", 2017, "white");
		expect(mockCar.model).toEqual("Tesla");
	});
});

describe("car.year", () => {
	test("gets the car year", () => {
		const mockCar = new Car("Tesla", 2017, "white");
		expect(mockCar.year).toEqual(2017);
	});
});

describe("car.color", () => {
	test("gets the car color", () => {
		const mockCar = new Car("Tesla", 2017, "black");
		expect(mockCar.color).toEqual("black");
	});
});