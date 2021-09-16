export const weatherForecastItem = (weatherObj) => {
    return `<article id="weather-info__item">
    <h5 class="day-name">original format: ${weatherObj.dt}</h5>
    <p class="feels-like-temperature">Feels like ${weatherObj.main.temp}</p>
</article>`
}