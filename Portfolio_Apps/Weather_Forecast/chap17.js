/// //Listing 17.1
// for (var i = 10; i > 0; i--) {
//     alert(i);
// }
// alert("Blast Off!");

// //Listing 17.2
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// for (var i = 0; i < myFriends.length; i++){
//  alert(myFriends[i] + " is my friend.");
// }

// //Listing 17.3
// alert(Math.random());

// //Listing 17.4
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// var randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);

//Listing 17.5
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];
var coldWeather = ["Partly-Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
var hotWeather = ["Sunny", "Partly-Sunny"];

var maxTemp = 48;
var minTemp = 8;

generateWeather();

function generateWeather() {
    for (var i = 0; i < days.length; i++) {

        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        if (tempToday >= 28) {

            let weatherToday = hotWeather[Math.floor(Math.random() * hotWeather.length)];

            document.getElementById("7DayWeather").innerHTML += "<div id='" + days[i] + "' class='" +
                weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " +
                tempToday + " degrees.</div>";
        } else {

            let weatherToday = coldWeather[Math.floor(Math.random() * coldWeather.length)];

            document.getElementById("7DayWeather").innerHTML += "<div id='" + days[i] + "' class='" +
                weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " +
                tempToday + " degrees.</div>";
        }
    }
}