const submitBtn = document.getElementById('submitBtn')

const cityInput = document.getElementById('city-input')
const apiKey = '0639c54aa963cab94c1a9a968f720718'


function getCoord(cityName){
    var geoUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid=' + apiKey
    fetch(geoUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
    })
}
submitBtn.addEventListener("click", function(){
var cityNameVal = cityInput.value
getCoord(cityNameVal)
})


const atlantaBtn = document.getElementsByClassName('button1')[0]

atlantaBtn.addEventListener("click", getAtlanta)
function getAtlanta(){
    var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Atlanta&limit=5&appid=' + apiKey
    fetch(geoUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
    })
}

const denverBtn = document.getElementsByClassName('button2')[0]

denverBtn.addEventListener("click", getDenver)
function getDenver(){
    var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Denver&limit=5&appid=' + apiKey
    fetch(geoUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
    })
}
   
const seattleBtn = document.getElementsByClassName('button3')[0]  
seattleBtn.addEventListener("click", getSeattle)
function getSeattle(){
    var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Seattle&limit=5&appid=' + apiKey
    fetch(geoUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
    })
}
     


















