const { response } = require("express")


const url = 'http://localhost:5500/api'

function getUsers(){
    fetch(url)
    .then(response => console.log(response.json))
    .then()
    .catch(error => console.error(error))
}
getUsers()