document.addEventListener('DOMContentLoaded', () => {
    fetchCountries();
});

function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        let tblCountries = document.getElementById("tbl");

        let tblBody = `<tr>
                        <th>Name</th>
                        <th>Flag</th>
                    </tr>`;

        data.forEach(element => {
            tblBody += `<tr>
                        <td>${element.name.common}</td>
                        <td>
                        <img src="${element.flags.png}" alt="Flag of ${element.name.common}" width="50" height="30">
                        </td>
                    </tr>`;
        });

        tblCountries.innerHTML = tblBody;
    });
}

function searchCountry() {
    let searchValue = document.getElementById("txtSearch").value.trim().toLowerCase();
    let officialName = document.getElementById("officialName");
    let name = document.getElementById("name");
    let area = document.getElementById("area");
    let population = document.getElementById("population");
    let timezones = document.getElementById("timezones");
    let img = document.getElementById("img");
    let map = document.getElementById("map");
    let googleMapLink = document.getElementById("googleMapLink");
    let countryInfo = document.getElementById("country-info");

    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res => res.json())
    .then(data => {
        if (data && data.length > 0) {
            let country = data[0];
            officialName.textContent = `Official Name: ${country.name.official}`;
            name.textContent = `Common Name: ${country.name.common}`;
            area.textContent = `Area: ${country.area}`;
            population.textContent = `Population: ${country.population}`;
            timezones.textContent = `Timezones: ${country.timezones}`;
            img.innerHTML = `<img src="${country.flags.png}" alt="Flag of ${country.name.common}">`;
            googleMapLink.href = country.maps.googleMaps;
            googleMapLink.textContent = `View ${country.name.common} on Google Maps`;
            countryInfo.classList.remove("hidden");
        } else {
            alert("Country not found");
        }
    })
    .catch(error => {
        console.error("Error fetching country data:", error);
        alert("Error fetching country data");
    });
}
