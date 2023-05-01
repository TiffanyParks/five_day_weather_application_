const submitBtn = document.getElementById('submitBtn')

const cityInput = document.getElementById('city-input')
const apiKey = '0639c54aa963cab94c1a9a968f720718'


function getCoord(cityName) {
    var geoUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    fetch(geoUrl)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            var cityName = document.getElementById('cityName')
            var dateItem = document.getElementById('date-item')
            var iconName = document.getElementById('icon-item')
            var temp = document.getElementById('display-temp-title')
            var wind = document.getElementById('display-wind-title')
            var humidity = document.getElementById('display-humidity-title')
            var description = document.getElementById('display-description-title')

            cityName.innerHTML = data.name
            // dateItem.innerHTML=date
            iconName.innerHTML = `<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' />`

            temp.innerHTML = Math.round((data.main.temp - 273) * (9 / 5) + 32) + 'degrees F'
            wind.innerHTML = `wind speed: ${data.wind.speed}`
            humidity.innerHTML = `humidity: ${data.main.humidity}`
            description.innerHTML = `wind speed: ${data.weather[0].description}`

            var lat = data.coord.lat
            var lon = data.coord.lon

            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`).then(function (res) {
                return res.json()
            }).then(function (data) {

                // // console.log(data.city)

                for (let i = 0; i <= 4; i++) {
                    const element = data.list[i];
                    // console.log(element)
                    const temp = element.main.temp
                    console.log(temp)
                    // console.log(element.wind.speed)


                    const wind = element.wind.speed
                    console.log(wind)

                    // console.log(element.main.humidity)



                    // const humidity = element.main.humidity
                    // console.log(humidity)




                    // const description = element.weather.description
                    // console.log(description)

                    // const icon = element.weather.icon
                    //     console.log(icon)
                 }

            })

        })
}
submitBtn.addEventListener("click", function () {
    var cityNameVal = cityInput.value
    getCoord(cityNameVal)
})


const atlantaBtn = document.getElementsByClassName('button1')[0]

atlantaBtn.addEventListener("click", getAtlanta)
function getAtlanta() {
    var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Atlanta&limit=5&appid=' + apiKey
    fetch(geoUrl)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
        })
}

const denverBtn = document.getElementsByClassName('button2')[0]

denverBtn.addEventListener("click", getDenver)
function getDenver() {
    var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Denver&limit=5&appid=' + apiKey
    fetch(geoUrl)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
        })
}

const seattleBtn = document.getElementsByClassName('button3')[0]
seattleBtn.addEventListener("click", getSeattle)
function getSeattle() {
    var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Seattle&limit=5&appid=' + apiKey
    fetch(geoUrl)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
        })
}



















