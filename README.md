Description

The Weather Dashboard allows a traveler the capability to see the weather outlook for multiple cities so that the traveler can plan their trip accordingly.
Travelers can search for a city by but clicking submit after inserting an input in the form section. Traveler is then presented with current and future conditions for that city. The city information is stored in local storage for revisiting if desired. The city name, the date, an weather icon, the temperature, the humidity and wind speed is provide to the traveler via the center display console. Travelers are provide a 5-day forecast in addition to the single day display.

User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

Acceptance Criteria

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

Dependencies

5 Day Weather Forecast API
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

Google APIs
href="https://fonts.googleapis.com/css2?family=Krona+One&family=Pacifico&family=Roboto:wght@700&display=swap"

5 Day Weather Forecast API key 

OpenWeatherMap APIs
https://openweathermap.org/forecast5

JavaScript
https://www.java.com/en/download/manual.jsp

Local Storage

HTML

CSS


