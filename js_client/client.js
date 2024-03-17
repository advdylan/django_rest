const loginForm = document.getElementById('login-form')
const searchForm = document.getElementById('search-form')
const baseEndpoint = "http://localhost:8000/api"
const contentContainer = document.getElementById('content-container')
if (loginForm) {
    // handle this login form
    loginForm.addEventListener('submit', handleLogin )
} 
if (searchForm) {
    // handle this login form
    searchForm.addEventListener('submit', handleSearch )
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
    .then(authData =>{
        handleAuthData(authData, getProductlist)
    })
    .catch(err=> {
        console.log('err', err)
    })
}

function handleSearch(event){
    event.preventDefault()

    let formData = new FormData(searchForm)
    let data = Object.fromEntries(formData)
    let searchParams = new URLSearchParams(data)


    const endpoint = `${baseEndpoint}/search/?${searchParams}`

    //console.log(loginObjectData)
    //console.log(loginObjectData['username'], loginObjectData['password'])
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer tasdff"

        }
    }
    
    fetch(endpoint, options) // Promise
    .then(response =>{ //functions on promise
        return response.json()
    })
    .then(data =>{
        console.log(data.hits)
        writeToContainer(data)
    })
    .catch(err=> {
        console.log('err', err)
    })
}

function handleAuthData(authData, callback) {
    localStorage.setItem('access', authData.access) // key -> value pair
    localStorage.setItem('refresh', authData.refresh)
    if (callback) {
        callback()
    }
}

function writeToContainer(data) {
    if (contentContainer) {
        contentContainer.innerHTML = "<pre>" + JSON.stringify(data, null, 4) + "</pre>"
    }
}

function getFetchOptions(method, body) {
    return {
        method: method === null ? "GET": method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('access')}`
                },
                body: body ? body: null
            }
}

function isTokenNotValid(jsonData) {
    if (jsonData.code && jsonData.code === "token_not_valid"){
        //run a refresh token fetch
        alert("Please login again")
        return false
    }
    return true
}

function getProductlist() {
    const endpoint = `${baseEndpoint}/products/`
    const options = getFetchOptions()
    fetch(endpoint, options)

    .then(response => {
        return response.json()
    })

    .then(data=> {
        const ValidData = isTokenNotValid(data)
        if (ValidData) {
            writeToContainer(data)
        }
    })
}



getProductlist()