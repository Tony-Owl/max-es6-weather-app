import * as ELEMENTS from 'elements.js';
import { Http } from 'http.js';

const APP_ID = 'cc11693e309be73d09b485264ca4ab5c';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length == 0) {
        return alert('Please enter a city name');
    };    

    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&APPID=${APP_ID}`;

    Http.fetchData(URL)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => alert(error));
};
