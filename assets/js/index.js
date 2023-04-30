var submitBtn = document.getElementById('submitBtn')

var cityInput = document.getElementById('city-input')
var apiKey = '0639c54aa963cab94c1a9a968f720718'
function getCoord(cityName){
    var getoUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid=' + apiKey
    fetch(getoUrl)
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























