export default class ALXClass {
	constructor(size, location) {
		this._size = size;
		this._location = location;
	}

	[Symbol.toPrimitive](hint) {
		return hint === "number" ? this._size : this._location;
	}
}
