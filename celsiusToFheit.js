// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenHeit (celsius) {
    const fahrenHeit =  (celsius * 9/5) + 32;
    return fahrenHeit;
 
}

const fahrenHeit = celsiusToFahrenHeit(10);
console.log(fahrenHeit)