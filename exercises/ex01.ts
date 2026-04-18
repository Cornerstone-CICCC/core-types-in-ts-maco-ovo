// Exercise 1: Create a Reservation Object

// 1. Create an object called `reservation` with properties `customerInformation`, `paymentInformation`, `checkOut` and `checkIn`.
// 2. Make sure to specify the types for each property.
// 3. Print out the reservation's information using `console.log`.

const reservation: {
	customerInformation: number;
	paymentInformation: string;
	checkOut: Date;
	checkIn: Date;
} = {
	customerInformation: 1,
	paymentInformation: "Credit",
	checkOut: new Date("2026-04-20"),
	checkIn: new Date("2026-04-17"),
};

console.log(reservation);
