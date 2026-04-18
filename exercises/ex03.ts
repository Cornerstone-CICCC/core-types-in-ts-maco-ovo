// Exercise 3: Manipulate and Reservations Array

// Create an array called reservations containing the multiple reservations that were created in the previous exercises.
// Add new property in the reservation interface for pricePerDay.
// Change the property paymentInformation to be an interface of isPayed, totalPrice.
// Calculate the price using the difference between checkIn and checkOut. Use the type Date and check how you can get the difference in days between two dates. Eg: Define a price per day and make the multiplication. If the reservation is two days, make the correct calculation.
// Add new reservation to the array.
// Print the information of each reservation. Check how you can print just a specific property.

interface PaymentInfo {
	isPayed: boolean;
	totalPrice: number;
}

interface Reservation {
	customerInformation: string;
	paymentInformation: PaymentInfo;
	checkIn: Date;
	checkOut: Date;
	pricePerDay: number;
}

const calculateTotal = (res: Reservation): number => {
	const diffTime = Math.abs(res.checkOut.getTime() - res.checkIn.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays * res.pricePerDay;
};

const reservation1: Reservation = {
	customerInformation: "Makoto",
	paymentInformation: { isPayed: true, totalPrice: 0 },
	checkIn: new Date("2026-04-20"),
	checkOut: new Date("2026-04-25"),
	pricePerDay: 150,
};

const reservation2: Reservation = {
	customerInformation: "Alice",
	paymentInformation: { isPayed: false, totalPrice: 0 },
	checkIn: new Date("2026-05-01"),
	checkOut: new Date("2026-05-05"),
	pricePerDay: 120,
};

const reservation3: Reservation = {
	customerInformation: "John",
	paymentInformation: { isPayed: true, totalPrice: 0 },
	checkIn: new Date("2026-06-10"),
	checkOut: new Date("2026-06-13"),
	pricePerDay: 100,
};


const reservations: Reservation[] = [reservation1, reservation2, reservation3];

// Print 

reservations.forEach((res, index) => {
	const days = Math.ceil(
		Math.abs(res.checkOut.getTime() - res.checkIn.getTime()) /
			(1000 * 60 * 60 * 24),
	);
	console.log(`Reservation ${index + 1}:`);
	console.log(`  Customer: ${res.customerInformation}`);
	console.log(`  Check-in: ${res.checkIn.toDateString()}`);
	console.log(`  Check-out: ${res.checkOut.toDateString()}`);
	console.log(`  Days: ${days}`);
	console.log(`  Price per Day: $${res.pricePerDay}`);
	console.log(`  Total Price: $${res.paymentInformation.totalPrice}`);
	console.log(
		`  Payment Status: ${res.paymentInformation.isPayed ? "Paid" : "Not Paid"}\n`,
	);
});
