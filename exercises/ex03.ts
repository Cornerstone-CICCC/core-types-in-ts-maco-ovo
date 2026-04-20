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

const calculateTotal = (checkIn: Date, checkOut: Date, pricePerDay: number): number => {
  const days = Math.ceil(
		Math.abs( (checkOut.getTime() + 1) - checkIn.getTime()) /
			(1000 * 60 * 60 * 24)
	);
	return days * pricePerDay;
};


const reservation1: Reservation = {
	customerInformation: "Makoto",
	checkIn: new Date("2026-04-20"),
	checkOut: new Date("2026-04-25"),
	pricePerDay: 150,
  paymentInformation: { isPayed: true, totalPrice: calculateTotal(new Date("2026-04-20"), new Date("2026-04-25"), 150) }
};

const reservation2: Reservation = {
	customerInformation: "Alice",
	checkIn: new Date("2026-05-01"),
	checkOut: new Date("2026-05-05"),
	pricePerDay: 120,
	paymentInformation: { isPayed: false, totalPrice: calculateTotal(new Date("2026-05-01"), new Date("2026-05-05"), 120) },
};

const reservation3: Reservation = {
	customerInformation: "John",
	checkIn: new Date("2026-06-10"),
	checkOut: new Date("2026-06-13"),
	pricePerDay: 100,
	paymentInformation: { isPayed: true, totalPrice: calculateTotal(new Date("2026-06-10"), new Date("2026-06-13"), 100) },
};


const reservations: Reservation[] = [reservation1, reservation2, reservation3];

// Print 

reservations.forEach((res, index) => {
	console.log(`Reservation ${index + 1}:`);
	console.log(`  Customer: ${res.customerInformation}`);
	console.log(`  Check-in: ${res.checkIn.toDateString()}`);
	console.log(`  Check-out: ${res.checkOut.toDateString()}`);
	console.log(`  Price per Day: $${res.pricePerDay}`);
	console.log(`  Total Price: $${res.paymentInformation.totalPrice}`);
	console.log(
		`  Payment Status: ${res.paymentInformation.isPayed ? "Paid" : "Not Paid"}\n`,
	);
});
