// var inputDisplay= $('#inputDisplay');

// //var titleEl = document.createElement("h2");
// var titleEl = $('<h3>');

// //titeEl.textContent = "Weather Dashboard";
// titleEl.text('Weather Dashboard');

// //titleEl.className = 'mainDisplay';
// titleEl.attr('class', 'mainDisplay');

// //title.El.classList.add('p-2')m- ('p-' is for padding);
// titleEl.addClass('p-5');

// //title.style.background = "rgb(0, 0, 255)";
// titleEl.css('background-color', 'rgb(0, 0, 255)');
// titleEl.css('color', 'rgb(255, 255, 255)');
// titleEl.scrollLeft('2px');
// //inputText.appendChild(titleEl);
// inputDisplay.append(titleEl);

// //titleEl.append('Weather Dashboard');
// inputDisplay.append('<h5 id="inputEl"> Search for a City:</h5>');

// var inputDisplay = $('#inputDisplay');
// var cityInputVaule = $('<input>');

// cityInputVaule.attr('class', 'city-input');
// cityInputVaule.attr('tpye', 'test');
// cityInputVaule.attr('playholder', 'Enter a city');

// cityInputVaule.height("4vh");
// cityInputVaule.css('color', 'rgb(100, 149, 237)');
// // cityInputValue.css('border', 'none'),ls

// // btnEl.c


var searchBtn = document.getElementById('searchBtn')

var inputEl = document.getElementById('cityInput')
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
searchBtn.addEventListener("click", function(){
var inputVal = inputEl.value
getCoord(inputVal)
})





















