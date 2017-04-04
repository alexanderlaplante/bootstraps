"use strict";

export default class Cars {
	constructor(){
		this._cars = [];
	}

	addCars(...carsList) {
		for (var i = 0; i < carsList.length; i++) {
			this._cars.push(carsList[i])
		}
	}

	getCars(){
		return this._cars;
	}

}