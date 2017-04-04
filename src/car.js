"use strict"

export default class Car {
	constructor(model, year, color){
		this._year = year;
		this._model = model;
		this._color = color;
	}

	get model(){
		return this._model;
	}

	set model(val){
		this._model = val;
	}

	get year(){
		return this._year;
	}

	set year(val){
		this._year = val;
	}

	get color(){
		return this._color;
	}

	set color(val){
		this._color = val;
	}

}