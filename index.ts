/* API WEATHER */
const API_URL_WEATHER = "http://api.weatherapi.com/v1";
const weatherIcon = document.getElementById("weather1") as HTMLImageElement;
const weatherInfo = document.getElementById("weather2") as HTMLElement;

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
interface ReportAcudits {
    joke: string;
    score: number;
    date: string;
}

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
      document.getElementById('joke')!.textContent = joke;

      const emo1 = document.querySelector('.emo1')!;
      const emo2 = document.querySelector('.emo2')!;
      const emo3 = document.querySelector('.emo3')!;

      emo1.setAttribute('data-score', '1');
      emo2.setAttribute('data-score', '2');
      emo3.setAttribute('data-score', '3');
  });
}

/* SATISFACTION BUTTONS */
let reportAcudits: ReportAcudits[] = [];

const addJoke = (joke: string, score: number): void => {
    const date: string = new Date().toISOString();
    reportAcudits.push({
        joke: joke,
        score: score,
        date: date,
      });
      console.log(reportAcudits);
};

const satisfactionButtons = document.querySelectorAll('.satisfaction-button');
satisfactionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const scoreAttr = button.getAttribute('data-score');
        if (scoreAttr && !isNaN(Number(scoreAttr))) {
            const score = parseInt(scoreAttr);
            const joke = document.getElementById('joke')!.textContent!;
            addJoke(joke, score);
        }
    });
});

getDadJoke();
  