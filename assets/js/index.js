const submitBtn = document.getElementById('submitBtn')
const singleBox = document.getElementById('single-boxes')
const cityInput = document.getElementById('city-input')
const storeInput = localStorage.getItem('geoUrl')
const apiKey = '0639c54aa963cab94c1a9a968f720718'


function getCoord(cityName) {
    var geoUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    fetch(geoUrl)
        .then(function (res) {
            localStorage.setItem("geoUrl", geoUrl);
            return res.json()

        })
        .then(function (data) {
            var cityName = document.getElementById('cityName')
            var dateItem = document.getElementById('date-item')
            // var hour =dayjs().hour()
            var iconName = document.getElementById('icon-item')
            var temp = document.getElementById('display-temp-title')
            var wind = document.getElementById('display-wind-title')
            var humidity = document.getElementById('display-humidity-title')
            var description = document.getElementById('display-description-title')

            cityName.innerHTML = data.name
            // dateItem.innerHTML=$('#dateItem').text(day.js().format('dddd, MMMM D YYYY'));
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
                console.log(data)

                var body = document.body;

                for (let i = 0; i < 5; i++) {

                    var listOne = data.list[i]
                    // console.log(listOne)

                    // var name2 = listOne.
                    // var data2 = listOne.weather.icon

                    var icon2 = listOne.weather[0].icon
                    console.log(icon2)
                    var temp2 = listOne.main.temp
                    console.log(temp2)
                    var wind2 = listOne.wind.speed
                    console.log(wind2)
                    var humidity2 = listOne.main.humidity
                    console.log(humidity2)
                    var description2 = listOne.weather[0].description
                    console.log(description2)


                    // city2.textContent = ''
                    // data2 .textContent = ''
                    icon2.textContent = `<img src='http://openweathermap.org/img/w/${listOne.weather[0].icon}.png' />`
                    temp2.textContent = Math.round((listOne.main.temp - 273) * (9 / 5) + 32) + 'degrees F'
                    wind2.textContent = 'Wind: ' + wind2
                    description2.textContent = 'Description ' + description2
                    humidity2.textContent = 'Humidity: ' + humidity2

                    // tempEl.appendChild.temp2//needs initialization
                    // temp2.textContent = "Temp:" + temp2
                    // document.appendChild.tempEl
                    // tempEl.appendChild.temp2
                    // boxes.setAttribute("style", "display: inline-block, color:white; background:darkblue; height:10rem; width:8rem; padding:5px");

                    let boxes = document.createElement('div');
                    boxes.classList.add("boxes");

                    let dateEl = document.createElement('p');
                    dateEl.classList.add("mm-dd-yyy");

                    let iconEl = document.createElement('p');
                    iconEl.classList.add("icons");
                    iconEl.textContent = `<img src='http://openweathermap.org/img/w/${listOne.weather[0].icon}.png' />`

                    let tempEl = document.createElement('p');
                    tempEl.classList.add("temp");
                    tempEl.textContent = Math.round((listOne.main.temp - 273) * (9 / 5) + 32) + 'degrees F'
                    let windEl = document.createElement('p');
                    windEl.classList.add("wind");
                    windEl.textContent = 'Wind: ' + wind2
                    let descriptionEl = document.createElement('p');
                    descriptionEl.classList.add("description");
                    descriptionEl.textContent = 'Description ' + description2
                    let humidityEl = document.createElement('p');
                    humidityEl.classList.add("humidity");
                    humidityEl.textContent = 'Humidity: ' + humidity2
                    singleBox.setAttribute("style", "height: 10px")


                    boxes.append(dateEl);
                    boxes.append(iconEl);
                    boxes.append(tempEl);
                    boxes.append(windEl);
                    boxes.append(descriptionEl);
                    boxes.append(humidityEl);
                    singleBox.append(boxes);
                }
            })

        })
}
submitBtn.addEventListener("click", function () {
    var cityNameVal = cityInput.value;
    getCoord(cityNameVal)
})


const atlantaBtn = document.getElementsByClassName('button1')[0]

// atlantaBtn.addEventListener("click", getAtlanta)
// function getAtlanta() {
//     var lat = data.coord.lat
//     var lon = data.coord.lon

//     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`).then(function (res) {
//         return res.json()
//     }).then(function (data) {

//         var body = document.body;

//         for (let i = 0; i < 5; i++) {

//             var listOne = data.list[i]
//             // console.log(listOne)

//             // var name2 = listOne.
//             // var data2 = listOne.weather.icon

//             var icon2 = listOne.weather[0].icon
//             console.log(icon2)
//             var temp2 = listOne.main.temp
//             console.log(temp2)
//             var wind2 = listOne.wind.speed
//             console.log(wind2)
//             var humidity2 = listOne.main.humidity
//             console.log(humidity2)
//             var description2 = listOne.weather[0].description
//             console.log(description2)
//     )
// const denverBtn = document.getElementsByClassName('button2')[0]

// denverBtn.addEventListener("click", getDenver)
// function getDenver() {
//     var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Denver&limit=5&appid=' + apiKey
//     fetch(geoUrl)
//         .then(function (res) {
//             return res.json()
//         })
//         .then(function (data) {
//             console.log(data)
//         })
// }

// const seattleBtn = document.getElementsByClassName('button3')[0]
// seattleBtn.addEventListener("click", getSeattle)
// function getSeattle() {
//     var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Seattle&limit=5&appid=' + apiKey
//     fetch(geoUrl)
//         .then(function (res) {
//             return res.json()
//         })
//         .then(function (data) {
//             console.log(data)
//         })




















