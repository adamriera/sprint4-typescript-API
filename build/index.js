"use strict";
/* API JOKES */
function getDadJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
        const joke = data.joke;
        console.log(joke);
        const score = 1;
        addJoke(joke, score);
        document.getElementById('joke').textContent = joke;
        const emo1 = document.querySelector('.emo1');
        const emo2 = document.querySelector('.emo2');
        const emo3 = document.querySelector('.emo3');
        emo1.setAttribute('data-score', '1');
        emo2.setAttribute('data-score', '2');
        emo3.setAttribute('data-score', '3');
    });
}
/* API WEATHER */
const API_URL_WEATHER = "http://api.weatherapi.com/v1";
const weatherIcon = document.getElementById("weather1");
const weatherInfo = document.getElementById("weather2");
function getWeather() {
    navigator.geolocation.getCurrentPosition((success) => {
        const { latitude, longitude } = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=41.3887900&lon=2.1589900&units=metric&appid=5f140aa6dd59f6e21edd58a5b66306f1`)
            .then(response => response.json())
            .then(data => {
            const { temp } = data.main;
            weatherInfo.innerHTML = `${Math.trunc(temp)} ºC`;
            const icon = data.weather[0].icon;
            weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        });
    });
}
getWeather();
let reportAcudits = [];
const addJoke = (joke, score) => {
    const date = new Date().toISOString();
    reportAcudits.push({
        joke: joke,
        score: score,
        date: date,
    });
    console.log(reportAcudits);
};
const score = 1;
addJoke('joke', score);
