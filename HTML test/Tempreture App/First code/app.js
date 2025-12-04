const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
const city = 'New York'; // Change this to your desired city

// Function to fetch weather data
function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;

      // Display the temperature
      document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;

      // Set the description text
      document.getElementById('description').innerText = `Description: ${description}`;

      // Set the weather image
      const imageUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.getElementById('weather-image').src = imageUrl;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

// Call the function to get weather
getWeather();
