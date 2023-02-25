const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
    {
    name: {
    common: "John",
    fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: false,
    address: {
    street: "13/A St Joseph",
    house: 10,
    },
    },
    {
    name: {
    common: "Humayoun",
    fullName: ["Humayoun", "Kabir"]
    },
    age: 33,
    isMale: false,
    address: {
    street: "13/A St Lucia",
    house: 11,
    },
    },
    ]
    };


const displayPerson = persons => {
    const personsContainer = document.getElementById('persons-container');

    persons.forEach(person => {
        const personDiv = document.createElement('div');
        personDiv.classList.add('pb-5', 'space-y-3', 'space-x-4',  'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'hover:bg-gray-100', 'dark:bg-gray-800', 'dark:border-gray-700', 'dark:hover:bg-gray-700');
        personDiv.innerHTML = `
        <h3 class="p-4 mb-2 bg-gray-200  text-base font-semibold tracking-tight text-gray-900 dark:text-white">Person name : ${person.name.common} </h3>
        <h5 class="text-base font-bold tracking-tight text-gray-900 dark:text-white">Age : ${person.age} </h5>
        <p class=" font-normal text-gray-700 dark:text-gray-400">Street : ${person.address.street} House No. ${person.address.house} </p>
        `;
        personsContainer.appendChild(personDiv);
        console.log(person.address);
    });
}


displayPerson(person.result);
    