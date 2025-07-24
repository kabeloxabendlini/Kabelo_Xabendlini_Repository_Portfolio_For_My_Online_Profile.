// Global variables
let money = 40;
let lunches = 0;
let totalPriceSpent = 0;

// Cache DOM elements
const moneyDisplay = document.getElementById("money");
const receipt = document.getElementById("receipt");
const orderButton = document.getElementById("placeOrder");
const numSandwichesInput = document.getElementById("numSandwiches");

// Display initial money
moneyDisplay.innerHTML = money;

// Event listener for placing orders
orderButton.addEventListener("click", buyLunches);

// Handle buying lunches
function buyLunches() {
    resetForm();
    let day = 0;

    const numberOfSandwiches = parseInt(numSandwichesInput.value);
    if (isNaN(numberOfSandwiches) || numberOfSandwiches <= 0) {
        alert("Please enter a valid number of sandwiches.");
        return;
    }

    while (money > 0) {
        day++;
        const priceToday = getSandwichPrice();
        const totalPrice = priceToday * numberOfSandwiches;

        if (money >= totalPrice) {
            money -= totalPrice;
            lunches += numberOfSandwiches;
            totalPriceSpent += totalPrice;

            receipt.innerHTML += `<p>On day ${day}, sandwiches are: $${priceToday}. You have $${money.toFixed(2)} left.</p>`;
        } else {
            receipt.innerHTML += `<p>Today, sandwiches are: $${priceToday}. You don't have enough money. Maybe your sister will give you some of her sandwich.</p>`;
            break;
        }
    }

    const avgPrice = (totalPriceSpent / lunches).toFixed(2);
    receipt.innerHTML += `<p>You bought ${lunches} lunches this week.</p>`;
    receipt.innerHTML += `<p>Average sandwich price: $${avgPrice}</p>`;
}

// Generate random sandwich price between $0.00 and $1.00
function getSandwichPrice() {
    return parseFloat((Math.random() * 1).toFixed(2));
}

// Reset values and UI
function resetForm() {
    money = 40;
    lunches = 0;
    totalPriceSpent = 0;
    receipt.innerHTML = "";
    moneyDisplay.innerHTML = money;
}

// Password prompt function
function requestPassword() {
    let password;
    while (password !== "Kabelo") {
        const userInput = prompt("Password please?");
        if (userInput === "Kabelo") {
            password = "Kabelo";
        }
    }
    alert("Welcome.");
}

// Prompt for password on page load
requestPassword();