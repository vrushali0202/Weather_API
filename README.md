# How to Use
  1) When the application loads, it will display the weather information for the default city (Mumbai in this case).
  2) To search for weather information for a different city, simply type the city name in the search box .
  3) The application will fetch the weather data for the specified city from the OpenWeatherMap API and display it on the screen.

# Code Explanation
The main logic for fetching weather data is implemented in the TempApp component. Here's a brief explanation of the code:
  1) We use the useState hook to manage the state of the city and search variables. city will store the weather data, and search will hold the city name entered by 
     the user.
  2) The useEffect hook is used to fetch weather data from the OpenWeatherMap API whenever the search state changes. It runs the fetchApi function, which performs an 
     asynchronous API call using fetch and updates the city state with the fetched data.
  3) The API key is stored in the apiKey variable and is concatenated with the API URL to make the API call.
