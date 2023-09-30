let inputval = document.getElementById("cityinput");
let btn = document.getElementById("subBtn");
let temperature = document.getElementById("temperature");
let city = document.getElementById("cityoutput");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind");
let description = document.getElementById("description");
let errormsg = document.getElementById("errormsg");
let results = document.getElementById("results");
async function weatherCheck(val) {
	let apikey = "1cf55fe3c30acb7859839fc0d73adf8e";
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apikey}`;
	let weatherinfo = await fetch(`${url}`).then(response => response.json());
	console.log(weatherinfo);
	if (weatherinfo.cod === '404' || weatherinfo.name === undefined ) {
		console.log("error");
		errormsg.style.display = 'inline';
		results.style.display = 'none';
		return;
	} else {
		errormsg.style.display = 'none';
		results.style.display = 'block';
		city.innerHTML = `City Name : ${weatherinfo.name}`;
		temp.innerHTML = `Temperature : ${temperature.value === 'fahrenheit' ? Math.round((weatherinfo.main.temp - 273.15) * 9 / 5 + 32) : Math.round(weatherinfo.main.temp - 273.15)} `;
		humidity.innerHTML = `Humidity : ${weatherinfo.main.humidity}`;
		windSpeed.innerHTML = `wind Speed : ${weatherinfo.wind.speed}`;
		description.innerHTML = `Description : ${weatherinfo.weather[0].description}`;
	}
}
btn.addEventListener('click', () => {
	weatherCheck(inputval.value);
})