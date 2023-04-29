var inputDisplay= $('#inputDisplay');

//var titleEl = document.createElement("h2");
var titleEl = $('<h3>');

//titeEl.textContent = "Weather Dashboard";
titleEl.text('Weather Dashboard');

//titleEl.className = 'mainDisplay';
titleEl.attr('class', 'mainDisplay');

//title.El.classList.add('p-2')m- ('p-' is for padding);
titleEl.addClass('p-5');

//title.style.background = "rgb(0, 0, 255)";
titleEl.css('background-color', 'rgb(0, 0, 255)');
titleEl.css('color', 'rgb(255, 255, 255)');
titleEl.scrollLeft('2px');
//inputText.appendChild(titleEl);
inputDisplay.append(titleEl);

//titleEl.append('Weather Dashboard');
inputDisplay.append('<h5 id="inputEl"> Search for a City:</h5>');

var inputDisplay = $('#inputDisplay');
var cityInputVaule = $('<input>');

cityInputVaule.attr('class', 'city-input');
cityInputVaule.attr('tpye', 'test');
cityInputVaule.attr('playholder', 'Enter a city');

cityInputVaule.height("4vh");
cityInputVaule.css('color', 'rgb(100, 149, 237)');
// cityInputValue.css('border', 'none'),

inputDisplay.append(cityInputValue);


//.button.fomattinh

var btnEl = $('<button>');
btnEl.height("5vh");
btnEl.css('color', "grey")

btnEl.c





















