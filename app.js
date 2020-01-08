console.log("Hello Boyle!")

const APIpre = "http://api.openweathermap.org/data/2.5"
const APIkey = "&appid=b3e34d17911306f4e4996155270e0bdd"

const weath = axios.get(APIpre + "/weather?zip=93401,us" + APIkey)
        .then(response => response.data)
        .then(data => console.log(data ))
