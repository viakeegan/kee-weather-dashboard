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

             // for loop through index 0 - 4
             for (let i = 0; i < 5; i++) {
                let dailyIcon = data.daily[i].weather[0].icon;
                let dailyTemp = data.daily[i].temp.day;
                let dailyWind = data.daily[i].wind_gust;
                let dailyHumid = data.daily[i].humidity;
                let dailyUV = data.daily[i].uvi

                switch(i) {
                    // loading all data for day 1
                    case 0:
                        for (let x = 0; x < dayOneItems.length; x++) {
                            switch(x) {
                                case 0:
                                    $(dayOneItems[x]).text(futureDates(i + 1));
                                    break;
                                case 1:
                                    $(dayOneItems[x]).attr("src", usingIcon(dailyIcon));
                                    break;
                                case 2:
                                    $(dayOneItems[x]).text(dailyTemp + "*F");
                                    break;
                                case 3:
                                    $(dayOneItems[x]).text(dailyWind + " MPH");
                                    break;
                                case 4:
                                    $(dayOneItems[x]).text(dailyHumid + "%");
                                    break;
                                case 5:
                                    $(dayOneItems[x]).text(dailyUV);
                                    break;
                                default:
                                    console.log("Obviously you are an idiot... or this needs to go to next day's data");
                            }
                        }
                        break;

                    // loading all data for day 2
                    case 1:
                        for (let x = 0; x < dayTwoItems.length; x++) {
                            switch(x) {
                                case 0:
                                    $(dayTwoItems[x]).text(futureDates(i + 1));
                                    break;
                                case 1:
                                    $(dayTwoItems[x]).attr("src", usingIcon(dailyIcon));
                                    break;
                                case 2:
                                    $(dayTwoItems[x]).text(dailyTemp + "*F");
                                    break;
                                case 3:
                                    $(dayTwoItems[x]).text(dailyWind + " MPH");
                                    break;
                                case 4:
                                    $(dayTwoItems[x]).text(dailyHumid + "%");
                                    break;
                                case 5:
                                    $(dayTwoItems[x]).text(dailyUV);
                                    break;
                                default:
                                    console.log("Obviously you are an idiot... or this needs to go to next day's data");
                            }
                        }
                        break;

                    // loading all data for day 3                        
                    case 2:
                        for (let x = 0; x < dayThreeItems.length; x++) {
                            switch(x) {
                                case 0:
                                    $(dayThreeItems[x]).text(futureDates(i + 1));
                                    break;
                                case 1:
                                    $(dayThreeItems[x]).attr("src", usingIcon(dailyIcon));
                                    break;
                                case 2:
                                    $(dayThreeItems[x]).text(dailyTemp + "*F");
                                    break;
                                case 3:
                                    $(dayThreeItems[x]).text(dailyWind + "MPH");
                                    break;
                                case 4:
                                    $(dayThreeItems[x]).text(dailyHumid + "%");
                                    break;
                                case 5:
                                    $(dayThreeItems[x]).text(dailyUV);
                                    break;
                                default:
                                    console.log("Obviously you are an idiot... or this needs to go to next day's data");
                            }
                        }
                        break;

                    // loading all data for day 4
                    case 3:
                        for (let x = 0; x < dayFourItems.length; x++) {
                            switch(x) {
                                case 0:
                                    $(dayFourItems[x]).text(futureDates(i + 1));
                                    break;
                                case 1:
                                    $(dayFourItems[x]).attr("src", usingIcon(dailyIcon));
                                    break;
                                case 2:
                                    $(dayFourItems[x]).text(dailyTemp + "*F");
                                    break;
                                case 3:
                                    $(dayFourItems[x]).text(dailyWind + " MPH");
                                    break;
                                case 4:
                                    $(dayFourItems[x]).text(dailyHumid + "%");
                                    break;
                                case 5:
                                    $(dayFourItems[x]).text(dailyUV);
                                    break;
                                default:
                                    console.log("Obviously you are an idiot... or this needs to go to next day's data");
                            }
                        }
                        break;
                    // loading data for day 5
                    case 4:
                        for (let x = 0; x < dayFiveItems.length; x++) {
                            switch(x) {
                                case 0:
                                    $(dayFiveItems[x]).text(futureDates(i + 1));
                                    break;
                                case 1:
                                    $(dayFiveItems[x]).attr("src", usingIcon(dailyIcon));
                                    break;
                                case 2:
                                    $(dayFiveItems[x]).text(dailyTemp + "*F");
                                    break;
                                case 3:
                                    $(dayFiveItems[x]).text(dailyWind + " MPH");
                                    break;
                                case 4:
                                    $(dayFiveItems[x]).text(dailyHumid + "%");
                                    break;
                                case 5:
                                    $(dayFiveItems[x]).text(dailyUV);
                                    break;
                                default:
                                    console.log("Obviously you are an idiot... or this needs to go to next day's data");
                            }
                        }
                        break;
                }
            }
        });

       // Reverse geocoding to pull the city and state and display that in the current weather
       let reversed = reverseGeo(data.coord.lat, data.coord.lon);
       fetch(reversed)
       .then(response => response.json())
       .then(function(data) {
           let city = data[0].name;
           let state = data[0].state;
           $("#currentCityDate").text("");
           $("#currentCityDate").text(city + ", " + state + " " + moment().format("MM/DD/YYYY"));
       });
       
        // Adding icon to represent current weather
        let curIcon = usingIcon(data.weather[0].icon);
        $("#curIcon").attr("src", curIcon);
    });
};

// a function to keep from writing out the link everytime.
function usingIcon(icon) {
    let iconPath = "https://openweathermap.org/img/w/" + icon + ".png";
    return iconPath;
};

// a function to keep from writing out the link everytime.
function fetchOneCall(lat, lon) {
    let ppfWeatherData = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly" + myAPIWeatherKey;
    return ppfWeatherData;
};

// a function to keep from writing out the link everytime.
function reverseGeo(lat, lon) {
    let reversing = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + lat + "&lon=" + lon + "&limit=1&appid=a15f02adbde7a78309af009d972b4360";
    return reversing;
}

// a function for automating the dates for the 5 day forecast $(dayOneItems[x]).text(moment().add(1, "d"))
function futureDates(nthDays) {
    let xDays = moment().add(nthDays, "d").format("MM/DD/YYYY");
    return xDays;
}

// get last search before page was refreshed and display that data
function previData() {
    if (localStorage.length > 0){
        userSearch = localStorage.getItem(localStorage.length - 1 );
        userSearch = userSearch.replace('"', "");
        userSearch = userSearch.replace('"', '');
        let curWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + myAPIWeatherKey;
        makingWeatherCall(curWeatherAPI);
        previBtns();
    }
    else {
        console.log("There is no recent search history");
    }
};

function previBtns() {
    // loop through local storage and create buttons for the 5 most recent searches
    for (let i = 0; i <= localStorage.length; i++) {
        // button creation
        let previBtn = $("<button></button>");
        // variable to hold the code to retrieve the most recent items
        let previ = localStorage.getItem(localStorage.length - i);
        // i has to be greater than 0 or else its going to be undefined since the length is one number larger than the final index spot
        // i has to be less than 6 so there can only be 5 buttons at most.
        if (i > 0 && i < 6) {
            // the next two lines of code are to get rid of the quotations.
            previ = previ.replace('"',"");
            previ = previ.replace('"',"");
            // add the value of the localStorage to the button text
            previBtn.text(previ);
            previBtn.addClass("previBtns");
            previBtn.attr("id", "previBtn"+i);
            $("#previousSearch").append(previBtn);
        }
    }
}

