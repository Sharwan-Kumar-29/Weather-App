# Weather App
deploy link:

## Overview
The Weather App is a React-based web application that allows users to fetch and display real-time weather information for any city using the WeatherAPI. This application demonstrates the integration of third-party APIs, debouncing for better performance, and styled components.

## Features
- Displays real-time weather details such as temperature, condition, humidity, cloud cover, visibility, and wind speed.
- Automatically fetches weather data for a default city (London) if no input is provided.
- Implements debouncing for optimized API calls.
- User-friendly interface with clean and responsive design.

## Technologies Used
- **React**: Used for building the user interface.
- **Axios**: Used for making API requests.
- **JavaScript (ES6)**: Core logic and functionality.
- **CSS**: Styling the components and layout.
- **WeatherAPI**: Provides real-time weather data.

## Platforms
- **Code Editor**: Visual Studio Code (VS Code).
- **API Provider**: [WeatherAPI](https://www.weatherapi.com/) (free tier used for this application).

## Setup and Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Replace the `API_KEY` variable in the `WeatherApp` component with your WeatherAPI key. You can get a free API key by signing up at [WeatherAPI](https://www.weatherapi.com/).

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to use the app.

## How to Use
1. Enter the name of the city in the input field.
2. The app will automatically fetch the weather details for the city after a short delay (debouncing).
3. If no city is entered, the app defaults to displaying weather information for London.
4. If there is an error in fetching the data (e.g., invalid city name), an error message will be displayed.

## Project Structure
- **`src`**: Contains all the source code files.
  - **`WeatherApp.js`**: Main React component for the application.
  - **`styles`**: Inline CSS styles for the app components.
- **`public`**: Contains the static assets.

## API Details
- **API Used**: [WeatherAPI](https://www.weatherapi.com/)
  - Endpoint: `http://api.weatherapi.com/v1/current.json`
  - Key Parameters:
    - `key`: Your API key.
    - `q`: Query parameter for the city name.

## Future Improvements
- Add support for 5-day or 7-day weather forecasts.
- Implement location-based weather fetching using geolocation.
- Enhance the UI with more animations and transitions.
- Provide options to toggle between Celsius and Fahrenheit.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

## Acknowledgements
- Thanks to [WeatherAPI](https://www.weatherapi.com/) for providing the weather data.


