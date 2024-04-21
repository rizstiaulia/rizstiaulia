const username = document.getElementById("username")
const username1 = document.getElementById("username1")
const regex1 = new RegExp ("^[a-zA-Z0-9_-]{3,16}$")
username.addEventListener("input", () => {
    if(username.value === ""){
        username1.innerHTML = "";
    }else if(regex1.test(username.value)){
        username1.innerHTML = "Valid";
    }else{
        username1.innerHTML = "Invalid";
    }
});

const email = document.getElementById("email")
const email1 = document.getElementById("email1")
const regex2 = new RegExp (/^\S+@\S+\.\S+$/)
email.addEventListener("input", () => {
    if(email.value === ""){
        email1.innerHTML = "";
    }else if(regex2.test(email.value)){
        email1.innerHTML = "Valid";
    }else{
        email1.innerHTML = "Invalid";
    }
});

const notelp = document.getElementById("no-telp")
const notelp1 = document.getElementById("no-telp1")
const regex3 = new RegExp ("^08\\d{10}$")
notelp.addEventListener("input", () => {
    if(notelp.value === ""){
        notelp1.innerHTML = "";
    }else if(regex3.test(notelp.value)){
        notelp1.innerHTML = "Valid";
    }else{
        notelp1.innerHTML = "Invalid";
    }
});

const nim = document.getElementById("nim")
const nim1 = document.getElementById("nim1")
const regex4 = new RegExp ("^\\d{9}$")
nim.addEventListener("input", () => {
    if(nim.value === ""){
        nim1.innerHTML = "";
    }else if(regex4.test(nim.value)){
        nim1.innerHTML = "Valid";
    }else{
        nim1.innerHTML = "Invalid";
    }
});

const password = document.getElementById("password")
const password1 = document.getElementById("password1")
const regex5 = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")

password.addEventListener("input", () => {
    if(password.value === ""){
        password1.innerHTML = "";
    }else if(regex5.test(password.value)){
        password1.innerHTML = "Valid";
    }else{
        password1.innerHTML = "Invalid";
    }
});



