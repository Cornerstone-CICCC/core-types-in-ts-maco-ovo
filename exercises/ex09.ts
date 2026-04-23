// Exercise 9: Using the "Never" Type in a Function

// 1.Create a function throwError that throws an error.
// 2.Specify the return type of the function as never.
// 3.Call the function and catch the error.
// 4.Return void and try to see the difference. Try to return something.

function throwError(msg: string): never {
    throw new Error(msg);
}

try {
    throwError("Something is wrong!");
} catch (e) {
    console.log("Caught the error.");
}

