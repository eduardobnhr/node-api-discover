

const { response } = require("express")

const url = 'http://localhost:5500/api'

function getUsers(){
    fetch(url)
    .then(response => response.json)
    .then(data => renderApiResult.textContent = 
        JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(){
    fetch(`url`/1)
    .then(response => response.json)
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.userCity
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "aplication/json; charset=UTF-8"
        }
    })
    .then(response => response.JSON())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: "neymar junior",
    avatar: "http://lorempixel.com/400/200",
    city: "arabia"
}
addUser(newUser)

getUsers()
getUsers()