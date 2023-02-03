const getWeatherData = (city) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c433df7f05mshe1741dca0f09dc0p17a0a6jsn47ed0c879ef4',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    return fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err));
}


const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    console.log(city);
    
    let data = await getWeatherData(city);

    showWeatherData(data);

}


const showWeatherData = (weatherData) => {
    
    document.getElementById('city-name').innerText = weatherData.location.name;
    document.getElementById('weather-type').innerText = weatherData.current.condition.text;
    document.getElementById('temp').innerText = weatherData.current.temp_c;
    document.getElementById('humidity').innerText = weatherData.current.humidity;
    document.getElementById('wind').innerText = weatherData.current.wind_kph;
    

    console.log(weatherData);

}


/* var myDate = new Date( 1673005500 *1000);
console.log(myDate.toGMTString());

let options = {
  dateStyle: "full",
  timeStyle: "medium",
  hour12: true,
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  
}

console.log(myDate.toLocaleString("en-KE", options)); */