const loadcountries = async(code) => {
    const url = `https://restcountries.com/v3.1/all`
    try{
        const res = await fetch(url)
        const data = await res.json()
        displyCountries(data)
    }
    catch(error){
        console.log(error);
    }
}

const displyCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'dark:bg-gray-800', 'dark:border-gray-700');
        countryDiv.innerHTML = `
        <div clss=" h-52 "><img class="h-52 w-full object-contain" src=" ${country.flags.svg} " alt="" /></div>
        <div class="p-5">
            <p class="mb-3 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Name : ${country.name.common} </p>
            <p class="mb-3 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Language : ${country.languages} </p>
            <p class="mb-3 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Capital : ${country.capital ? country.capital : ''} </p>
            <p class="mb-3 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">population :  ${country.population} </p>
            <p class="mb-3 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Time Zone :  ${country.timezones} </p>
            <p class="mb-3 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Currency : ${country.currencies} </p>
            <a href=" ${country.maps.googleMaps}" target="_blank" class=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Visit Website
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        `;
        countriesContainer.appendChild(countryDiv);

        console.log(country.currencies);
    });
}


loadcountries();