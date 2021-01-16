const WEATHER_API = `http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=cc59261c9babd438cfd54003efadeeff`;
const description = document.querySelector('.description');
const place = document.querySelector('.place');
const country = document.querySelector('.country');
const temperature = document.querySelector('.temp');
const search = document.querySelector('.search');
const searchLocation = document.querySelector('search-location');
const image = document.querySelector('.img');

fetch(WEATHER_API)
.then(response =>
{
     return response.json();

})

.then(data =>   
{
    return getWeather(data);
 
});

function getWeather(data)
{
    let array = data;
    console.log(array);

    let des = data.weather[0].description;
    description.innerHTML = des;

    let temp = data.main.temp;
    temp = temp-273.15;
    temp = Math.floor(temp);
    temperature.innerHTML = temp+"°c";

    let cntry = data.sys.country;
    country.innerHTML = cntry; 


    let location = data.name;
    place.innerHTML = location;
    

    let img = data.weather[0].icon;
    image.innerHTML = `<img src='http://openweathermap.org/img/wn/${img}@4x.png' alt='img'>`
    console.log("IMAGE:" ,img);
}

