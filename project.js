function orderCoffee(coffeeType) {
    // Prompt the user to enter a quantity
    let quantity = prompt('How many cups of coffee would you like to order?');

    // Check if the quantity is a valid number and greater than zero
    if (quantity !== null && !isNaN(quantity) && quantity > 0) {
        alert('Your order has been successfully placed.');
        // Additional code can be added here to handle the order
    } else if (quantity !== null) {
        alert("Please enter a valid quantity.");
    }
}or