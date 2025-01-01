export class ALXClass {
	constructor(year, location) {
		this._year = year;
		this._location = location;
	}

	get year() {
		return this._year;
	}

	get location() {
		return this._location;
	}
}

export class StudentALX {
	constructor(firstName, lastName, alxClass) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._alxClass = alxClass;
	}

	get fullName() {
		return `${this._firstName} ${this._lastName}`;
	}

	get fullStudentDescription() {
		return `${this._firstName} ${this._lastName} - ${this._alxClass.year} - ${this._alxClass.location}`;
	}
}

export const listOfStudents = [
	new StudentALX("Guillaume", "Salva", new ALXClass(2020, "San Francisco")),
	new StudentALX("John", "Doe", new ALXClass(2020, "San Francisco")),
	new StudentALX("Albert", "Clinton", new ALXClass(2019, "San Francisco")),
	new StudentALX("Donald", "Bush", new ALXClass(2019, "San Francisco")),
	new StudentALX("Jason", "Sandler", new ALXClass(2019, "San Francisco")),
];
