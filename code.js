// This project will be made using XHR to request JSON data from SWAPI API server.

const xhr = new XMLHttpRequest();
let baseURL = 'https://swapi.dev/api/'

// Algorith to generate a random number between min and max

function generateRandomNumber (min, max) {
    return Math.floor(Math.random () * max - min + min)
}

// Alert to handle 404 error_str

function catchNotFoundError () {
    Swal.fire(
        'Not found',
        '404 ERROR',
        'error'
    )
}

// To re-factor the code, I'll place the DOM elements being manipulated here so they are able to access to the global scope without making a messy code.

let charName = document.querySelector('.char-name'); let charGender = document.querySelector('.char-gender'); let charBirth = document.querySelector('.char-birth'); let charSkin = document.querySelector('.char-skin')

let planetName = document.querySelector('.planet-name'); let planetClimate = document.querySelector('.planet-climate'); let planetTerrain = document.querySelector('.planet-terrain'); let planetRotation = document.querySelector('.planet-rotation');

let starshipName = document.querySelector('.starship-name'); let starshipModel = document.querySelector('.starship-model'); let starshipManufacturer = document.querySelector('.starship-manufacturer'); let starshipCrew = document.querySelector('.starship-crew')


    let getCharacter = document.getElementById('getCharacter').addEventListener('click', function () {
        
        xhr.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                json = JSON.parse(this.responseText)

                charName.innerText = ' ' + json["name"]
                charGender.innerText = ' ' + json["gender"]
                charBirth.innerText = ' ' + json["birth_year"]
                charSkin.innerText = ' ' + json["skin_color"]
            }
            else if (this.status == 404) {
                catchNotFoundError()
            }
        }

        xhr.open('GET', `${baseURL}/people/${generateRandomNumber(1, 83)}`, true);
        xhr.send();
})

    document.getElementById('getPlanet').addEventListener('click', function () {

        xhr.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                json = JSON.parse(this.responseText)

                planetName.innerText = ' ' + json["name"]
                planetClimate.innerText = ' ' + json["climate"]
                planetTerrain.innerText = ' ' + json["terrain"]
                planetRotation.innerText = ' ' + json["rotation_period"]
            }
            else if (this.status == 404) {
                catchNotFoundError()
            }
        }

        xhr.open('GET', `${baseURL}/planets/${generateRandomNumber(1, 60)}`, true)
        xhr.send();
})

    document.getElementById('getStarship').addEventListener('click', function () {

        xhr.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                json = JSON.parse(this.responseText)

                starshipName.innerText = ' ' + json["name"]
                starshipModel.innerText = ' ' + json["model"]
                starshipManufacturer.innerText = ' ' + json["manufacturer"]
                starshipCrew.innerText = ' ' + json["crew"]
            }
            else if (this.status == 404) {
                catchNotFoundError()
            }
        }

        xhr.open('GET', `${baseURL}/starships/${generateRandomNumber(1, 40)}`, true)
        xhr.send();
})