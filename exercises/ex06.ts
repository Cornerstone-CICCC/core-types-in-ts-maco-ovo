// Exercise 6: Union Types for Function Parameters

// 1. Create a function called `printId` that accepts either a number or a string as a parameter.
// 2. Inside the function, check the type of the parameter and print a message accordingly.
// 3. Return the function accordingly with the type, `number` or `string`.

function printId(id: number | string): number | string {
	if (typeof id === "string") {
		console.log(`String ID: ${id}`);
	} else {
		console.log(`Number ID: ${id}`);
	}
	return id;
}

// Test Print
const Id1 = printId("user123");
console.log(Id1);

const Id2 = printId("2026");
console.log(Id2);

const Id3 = printId(2026);
console.log(Id3);
