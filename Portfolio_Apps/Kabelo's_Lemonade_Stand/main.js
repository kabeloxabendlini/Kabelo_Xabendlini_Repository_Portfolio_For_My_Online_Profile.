// *************************************** Line 1 - 125 ********************************************//

// // create days of week array
// var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];

// // define types of weather
// var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

// // set min and max temps
// var maxTemp = 110;
// var minTemp = 32;

// // cost (to you) of a cup of lemonade
// var lemonadeCost = 0.5;

// // array for storing daily temps
// var dailyTemp = [];

// // listen for order
// document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

// // make the week's weather
// generateWeather();

// /**
// generates weather for the week
// **/
// function generateWeather() {
//     var weatherToday;
//     var tempToday;
//     for (var i = 0; i < days.length; i++) {
//         weatherToday = weather[Math.floor(Math.random() * weather.length)];
//         tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
//         dailyTemp[i] = tempToday;
//         document.getElementById("7DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
//     }
// }

// /**
// calculates glasses of lemonade sold
// **/
// function openTheStand() {
//     var glassesSold = 0; // daily
//     var totalGlasses = 0; // weekly
//     var glassesLeft = 0; // left to sell

//     // clear out previous results
//     resetForm();

//     // get input
//     var numGlasses = Number(document.getElementById("numGlasses").value);
//     var glassPrice = Number(document.getElementById("glassPrice").value);


//     for (var i = 0; i < days.length; i++) {

//         // glasses sold depends on temp and price
//         glassesSold = Math.floor(dailyTemp[i] / glassPrice);

//         // how many glasses do we have now?
//         glassesLeft = numGlasses - totalGlasses;

//         // we can't sell more than we have
//         if (glassesSold > glassesLeft) {
//             glassesSold = glassesLeft;
//         }

//         // increase the weekly total
//         totalGlasses = glassesSold + totalGlasses;

//         // display daily total
//         document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";

//     }

//     displayResults(numGlasses, glassPrice, totalGlasses);

// }

// /**
// calculates results and displays a report
// **/
// function displayResults(weeklyInventory, glassPrice, weeklySales) {
//     // calculate results
//     var revenue = weeklySales * glassPrice;
//     var expense = weeklyInventory * lemonadeCost;
//     var leftOver = weeklyInventory - weeklySales;
//     var profit = revenue - expense;

//     // print out the weekly report
//     document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p>";
//     document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
//     document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
//     document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $" + profit + ".";
// }

// /**
// resets the game so that a new order can be placed
// **/
// function resetForm() {
//     document.getElementById("result").innerHTML = "";

// }

// for (var i = 0; i < days.length; i++) {

//     var currentPrice = glassPrice; 

//     if (days[i] === "Sunday") {
//         currentPrice = Math.max(0.01, glassPrice - 1); // prevent free or negative prices
//     }

//     glassesSold = Math.floor(dailyTemp[i] / currentPrice);

//     glassesLeft = numGlasses - totalGlasses;

//     if (glassesSold > glassesLeft) {
//         glassesSold = glassesLeft;
//     }

//     totalGlasses = glassesSold + totalGlasses;

//     document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";
// }


// *************************************** Line 1 - 125 ********************************************//

// *************************************** Line 127 - 239 ******************************************//

// Define days of the week

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Weather types
const weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

// Temperature range
const maxTemp = 110;
const minTemp = 32;

// Cost to make one glass
const lemonadeCost = 0.5;

// Array to store daily temperatures
let dailyTemp = [];

// Generate weather on load
generateWeather();

// Attach event listener to the button
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

/**
 * Generate random weather for each day and render it
 */
function generateWeather() {
    const weatherContainer = document.getElementById("7DayWeather");
    weatherContainer.innerHTML = ""; // Clear if regenerating

    for (let i = 0; i < days.length; i++) {
        const currentWeather = weather[Math.floor(Math.random() * weather.length)];
        const currentTemp = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        dailyTemp[i] = currentTemp;

        const dayBox = document.createElement("div");
        dayBox.id = days[i];
        dayBox.className = currentWeather;
        dayBox.innerHTML = `
            <b>Forecast for ${days[i]}:</b><br><br>
            ${currentWeather} and ${currentTemp}°F
        `;

        weatherContainer.appendChild(dayBox);
    }
}

/**
 * Calculate lemonade sales based on input and display results
 */
function openTheStand() {
    resetForm(); // Clear previous output

    const numGlasses = Number(document.getElementById("numGlasses").value);
    const glassPrice = Number(document.getElementById("glassPrice").value);
    const resultDiv = document.getElementById("result");

    if (numGlasses <= 0 || glassPrice < 0.5) {
        resultDiv.innerHTML = "<p>Please enter valid input values!</p>";
        return;
    }

    let totalGlasses = 0;

    for (let i = 0; i < days.length; i++) {
        let currentPrice = glassPrice;

        // Sunday discount
        if (days[i] === "Sunday") {
            currentPrice = Math.max(0.01, glassPrice - 1);
        }

        let glassesSold = Math.floor(dailyTemp[i] / currentPrice);
        const glassesLeft = numGlasses - totalGlasses;

        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft;
        }

        totalGlasses += glassesSold;

        resultDiv.innerHTML += `<p><strong>${days[i]}</strong>: Sold ${glassesSold} glasses.</p>`;
    }

    displayResults(numGlasses, glassPrice, totalGlasses);
}

/**
 * Display weekly summary
 */
function displayResults(weeklyInventory, glassPrice, weeklySales) {
    const revenue = weeklySales * glassPrice;
    const expense = weeklyInventory * lemonadeCost;
    const profit = revenue - expense;
    const leftOver = weeklyInventory - weeklySales;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML += `<hr>`;
    resultDiv.innerHTML += `<p><strong>Total sold:</strong> ${weeklySales} glasses</p>`;
    resultDiv.innerHTML += `<p><strong>Total revenue:</strong> $${revenue.toFixed(2)}</p>`;
    resultDiv.innerHTML += `<p><strong>Leftover stock:</strong> ${leftOver} glasses</p>`;
    resultDiv.innerHTML += `<p><strong>Profit:</strong> $${profit.toFixed(2)}</p>`;
}

/**
 * Clear the result section before new run
 */
function resetForm() {
    document.getElementById("result").innerHTML = "";
}

// // *************************************** Line 127 - 239 ******************************************//
