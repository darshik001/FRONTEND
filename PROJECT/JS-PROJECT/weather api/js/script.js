let searchdata = document.querySelector("#search-input")


let timefunction = () => {
    let date = new Date()
    return (date.toDateString())
}

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

let weatherfunction = (searchdata) => {

    let weather = document.querySelector('#weather')
    let data;
    if (searchdata.value == "") {
        data = "surat"
    } else {
        data = searchdata.value
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=728553c5759e12c0b5c96e66500b755b&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod == 404) {
                weather.innerHTML = `<h2 class="text-center mt-5 pt-5"> Data Not Found</h2>`
            } else {


                let sunsetTime = formatTime(data.sys.sunset);
                let sunriseTime = formatTime(data.sys.sunrise);


                let row = `
    <div class="current-weather my-auto">
            <div class="location">${data.name}, ${data.sys.country}</div>
            <div class="date">${timefunction()}</div >
            
            <div class="weather-main">
                <div>
                    <div class="temperature">${Math.floor(data.main.temp)}°C</div>
                    <div class="condition">${data.weather[0].description}</div>
                </div>
                <img src="img/weather.png" alt="Weather Icon" class="weather-icon">
            </div>            
            <div class="weather-details">
                <div class="detail-item">
                    <div class="detail-icon">💧</div>
                    <div>
                        <div>Humidity</div>
                        <div>${data.main.humidity} %</div>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-icon">🌬️</div>
                    <div>
                        <div>Wind</div>
                        <div>${data.wind.speed} km/h</div>
                    </div>
                </div>
                 <div class="detail-item">
                    <div class="detail-icon">☁️</div>
                    <div class="detail-text">
                        <div class="detail-label">Clouds</div>
                        <div class="detail-value">${data.clouds.all}%</div>
                    </div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-icon">👁️</div>
                    <div>
                        <div>Visibility</div>
                        <div>${data.visibility / 1000} km</div>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-icon">🔆</div>
                    <div>
                        <div>sunrise</div>
                        <div>${sunriseTime}</div>
                    </div>
                </div>

                <div class="detail-item">
                    <div class="detail-icon">🌙</div>
                    <div>
                        <div>Sunset</div>
                        <div>${sunsetTime}</div>
                    </div>
                </div>

    
            </div>
        </div >
            `
                weather.innerHTML = row


            }
            searchdata.value = ""
        })
        .catch(err => console.log(err))


}

weatherfunction(searchdata)

document.querySelector('#search').addEventListener("click", () => {

    weatherfunction(searchdata)
})