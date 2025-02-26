document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()
    const inputMobile = document.getElementById('input-mobile').value;
    const inputPin = document.getElementById('input-pin').value
    if(inputMobile.length === 11 && inputPin === '1234'){
        window.location.href= 'main.html'
    }
    else{
        alert('Invalid Input')
    }
})