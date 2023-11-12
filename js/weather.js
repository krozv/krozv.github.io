const API_KEY = "7ea882d9267117ff46544c144e6f3a0e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log(url);
    // fetch(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const temperature =data.main.temp

            const degrees = new Intl.NumberFormat('en-US', {
              style: 'unit',
              unit: 'celsius',
            });
    
            weather.innerText = `Weather = ${data.weather[0].main}\nTemp = ${degrees.format(temperature)}`;
            }); 
            // 시간이 좀 걸린 뒤 작동함.
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

// 위치 좌표 받음
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
