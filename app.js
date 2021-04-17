//api.openweathermap.org/data/2.5/weather?q={city}&appid={API }

// Line 7 ( Just had removed my Api Key for security purposes)

const weatherApi={
    baseUrl:"https://api.openweathermap.org/data/2.5/weather",
    key:""
    
}

//input configuration

const input=document.getElementById('input-box');
input.addEventListener('keypress', (event)=>{

    if (event.keyCode ==13){
        console.log(input.value);
        getWeatherdata(input.value);
        document.querySelector('.weather-report').style.display="block";
    }
});


//get weather data

function getWeatherdata(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showWeatherData);
}



//show the weather data

function showWeatherData(weather){
    console.log(weather);

    let city=document.getElementById("city");
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temp=document.getElementById("temp");
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let min_max=document.getElementById("min-max");
    min_max.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min) - ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType=document.getElementById("weather");
    weatherType.innerHTML=`${weather.weather[0].main}`;


    let date= document.getElementById("date");
    let todayDate=new Date();
    date.innerText=manageDate(todayDate);

    if (weatherType.textContent== 'Rain'){
        document.body.style.backgroundImage="url('images/rain.jpg')";
    }
    else if(weatherType.textContent== 'Clouds'){
        document.body.style.backgroundImage="url('images/cloudy.jpg')";
    }
     
    else if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/haze.jpg')";
        
    }   else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        
    } 
    else if(weatherType.textContent == 'Sunny') {
    
        document.body.style.backgroundImage = "url('image/sunny.jpg')";
        
    } 
}

//manage the date format

function manageDate(dateFormat){

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
     "September", "October", "November", "December"];

     let date=dateFormat.getDate();
     let day =days[dateFormat.getDay()];
     let month=months[dateFormat.getMonth()];
     let year=dateFormat.getFullYear();

     return `${date} ${month} , ${day} , ${year}`;
}

