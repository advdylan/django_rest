const loginForm = document.getElementById('login-form')
const baseEndpoint = "http://localhost:8000/api"
if (loginForm) {
    // handle this login form
    loginForm.addEventListener('submit', handleLogin )
} 

function handleLogin(event){
    event.preventDefault()
    const loginEndpoint = `${baseEndpoint}/token/`
    let loginFormData = new FormData(loginForm)
    let loginObjectData = Object.fromEntries(loginFormData)
    let bodyStr = JSON.stringify(loginObjectData)
    //console.log(loginObjectData)
    //console.log(loginObjectData['username'], loginObjectData['password'])
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: bodyStr
    }
    
    fetch(loginEndpoint, options) // Promise
    .then(response =>{ //functions on promise
        return response.json()
    })
    .then(handleAuthData)
    .catch(err=> {
        console.log('err', err)
    })
}

function handleAuthData(dupa) {
    localStorage.setItem('access', dupa.access) // key -> value pair
    localStorage.setItem('refresh', dupa.refresh)
}
