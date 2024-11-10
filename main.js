const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');
const notFoundSection = document.querySelector('.not-found');

const apiKey = '246e380498a4b34e0034a1f811c03261';

searchBtn.addEventListener('click', () => { 
    if( cityInput.value.trim() != '') {
       updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
});

cityInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && cityInput.value.trim() != '') {
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
});

async function getFetchData(endPoint, city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(apiUrl);
    console.log(response);

    return response.json();
}

async function updateWeatherInfo(city) {
    const weatherData = await getFetchData('weather', city);
    if (weatherData.weathterData != 200) {
        showDisplaySection(notFoundSection);
        return;
    }
}

function showDisplaySection

