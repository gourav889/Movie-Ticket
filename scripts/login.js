import { ALL_USERS } from "../component/global-variable.js"
import { getData } from "../component/local-storage.js"


var getDataArr = getData(ALL_USERS) || []

// Login function
const logIn = (event)=> {
    event.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    console.log(getDataArr)

    let auth = getDataArr.find( (e)=> e.username === username && e.password === password) 

    
    if(auth){
        alert("Login failed") 
       
    }
    else{
        alert("Login successful")
        window.location.href = "Pages/2nd_index.html"   
    }
}
document.querySelector("form").addEventListener("submit", logIn)
