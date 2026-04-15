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
	checkOut: "2024-07-01",
	checkIn: "2024-06-30",
};

console.log(reservation);
