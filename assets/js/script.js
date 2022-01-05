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

        