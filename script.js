var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries(){
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length){
        countryName = 'Poland';
    }
    fetch(url + countryName)
    .then(function(resp){
        return resp.json();
    })
    .then(showCountriesList);
}

function showCountriesList(resp){
    countriesList.innerHtml = '';
    resp.forEach(function(item){
        var listElement = document.createElement('li');
        listElement.innerText = item.name;
        countriesList.appendChild(listElement);
    });
}