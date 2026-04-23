// Exercise 8: Guarding Against "Unknown" Type

// 1.Create a function displayValue that takes a parameter of type unknown.
// 2.Use a type guard to check if the value is a string or a number and print it accordingly.
// 3.Create a function that receives a variable of the unknown type and make some operations. 
// Eg: if is a string, try to loop through to print each char. Don't handle the other cases. 
// Check how hard is to handle a function that receives this kind of type.

function displayValue(val: unknown) {
    if (typeof val === "string") {        
        for (const char of val) {
            console.log(char);
        }
    } else if (typeof val === "number") {
        console.log(val * 2);
    }
}

displayValue("Hello")
displayValue(5)
