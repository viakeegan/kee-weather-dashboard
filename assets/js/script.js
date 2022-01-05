// variables
let myAPIWeatherKey = "&units=imperial&APPID=a15f02adbde7a78309af009d972b4360";
let userSearch = "";
let storeKey = localStorage.length;

// all ids for the 5 day forecast
let dayOneItems = [
    "#dayOneDate",
    "#dayOneIcon",
    "#dayOneTemp",
    "#dayOneWind",
    "#dayOneHumid",
    "#dayOneUV"
];

let dayTwoItems = [
    "#dayTwoDate",
    "#dayTwoIcon",
    "#dayTwoTemp",
    "#dayTwoWind",
    "#dayTwoHumid",
    "#dayTwoUV"
];

let dayThreeItems = [
    "#dayThreeDate",
    "#dayThreeIcon",
    "#dayThreeTemp",
    "#dayThreeWind",
    "#dayThreeHumid",
    "#dayThreeUV"
];

let dayFourItems = [
    "#dayFourDate",
    "#dayFourIcon",
    "#dayFourTemp",
    "#dayFourWind",
    "#dayFourHumid",
    "#dayFourUV"
];

let dayFiveItems = [
    "#dayFiveDate",
    "#dayFiveIcon",
    "#dayFiveTemp",
    "#dayFiveWind",
    "#dayFiveHumid",
    "#dayFiveUV"
];

// fetching data from Open Weather Map based off city or zipcode
function makingWeatherCall(weather) {
    fetch(weather)
    .then(response => response.json())
    .then(function(data) {

        // Pull the lattitude and longitude and use that to make a onecall
        // to openweathermap to get current and future forecasts.
        let oneCallAPI = fetchOneCall(data.coord.lat, data.coord.lon);
        fetch(oneCallAPI)
        .then(response => response.json())
        .then(function(data) {
            // Display current temp
            let currentTemp = Math.round(data.current.temp);
            $("#curDayTemp").text(currentTemp + "*F");

            // Display current wind speed
            let curWind = Math.round(data.current.wind_gust);
            $("#curDayWind").text(curWind + " MPH");

            // Display current humidity
            let curHumid = Math.round(data.current.humidity);
            $("#curDayHumid").text(curHumid + "%");

            // Display current UV index
            let curUV = data.current.uvi;
            // color coding based on the intensity of the UV Index
            if (curUV < 3) {
                $("#curDayUV").css("background-color", "rgb(0,150,0)");
            }
            else if (curUV >=3 && curUV < 6) {
                $("#curDayUV").css("background-color", "rgb(196, 196, 23)");
            }
            else if (curUV >= 6 && curUV < 8) {
                $("#curDayUV").css("background-color", "rgb(196, 92, 23)");
            }
            else if (curUV >= 8 && curUV < 11) {
                $("#curDayUV").css("background-color", "rgb(175, 0, 0)");
            }
            else if (curUV >= 11) {
                $("#curDayUV").css("background-color", "rgb(121, 0, 40)");
            }
            $("#curDayUV").text(curUV);

            