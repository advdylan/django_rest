const loginForm = document.getElementById('login-form')
if (loginForm) {
    // handle this login form
    loginForm.addEventListener('submit', handleLogin )
} 

function handleLogin(event){
    console.log(event)
        event.preventDefault()
}