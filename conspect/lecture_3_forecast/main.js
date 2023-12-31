const api = {
    base: 'https://api.openweathermap.org/data/2.5/',
    key: 'e95d0e0d5d1e666edad1590110accb21',
    teacherKey: 'a27a21de3eb428ec51c7c70d333ec791'
}

const dateBuilder = (d) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "Jule",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

const input = document.querySelector('.searchbar');
const container = document.querySelector('.location-container');

let city = localStorage.getItem('city') || 'Ekaterinburg';
let store = {}

input.addEventListener('keyup', (e) => {

    const value = e.target.value;

    if(e.key == 'Enter' && e.target.value) {
        city = value;
        localStorage.setItem('city', city);
        fetchData();
        e.target.value = '';
    }
});

const fetchData = async () => {
    getLoader();
    const response = await fetch(`${api.base}weather?q=${city}&appid=${api.teacherKey}`).then(res => res.json());
    const {name, weather, main: {temp}, sys: {country}} = response;
    store = {
        name,
        weather: weather[0].main,
        temp,
        country
    };

    renderComponent();
}

const getLoader = () => {
    container.innerHTML = `<span class="loader"></span>`;
}

const renderComponent = () => {
    container.innerHTML = getContent();
};

const getContent = () => {

    const {name, weather, temp, country} = store;

    return `<div class="location-box">
        <div class="location">
            ${name}, ${country}
        </div>
        <div class="date">${dateBuilder(new Date())}</div>
    </div>
    
    <div class="weather-box">
        <div class="temp">${temp} °С</div>
        <div class="weather">${weather}</div>
    </div>`
}

fetchData();