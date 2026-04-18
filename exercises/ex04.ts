// Exercise 4: Create a Tuple

// Create a tuple called coordinate with two elements: a number representing the x-coordinate and a number representing the y-coordinate.
// Assign values to the tuple elements.
// Create an interface of location with the properties description and the tuple that you created.
// Print out the interface and coordinates.

type coordinate = [x: number, y: number];

interface Location {
	description: string;
	coordinates: coordinate;
}

const location1: Location = {
	description: "Paris",
	coordinates: [48.8584, 2.2945],
};

const location2: Location = {
	description: "New York",
	coordinates: [40.6892, -74.0445],
};

const locations: Location[] = [location1, location2];

locations.forEach((location) => {
	console.log(`Description: ${location.description}`);
	console.log(
		`Coordinates: X= ${location.coordinates[0]}, Y= ${location.coordinates[1]}`,
	);
});
