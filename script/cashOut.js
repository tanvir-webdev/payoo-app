document.getElementById('cashout').addEventListener('click', function(event){
    event.preventDefault()
    const pin = document.getElementById('cashout-pin').value;
    // pin
    const convertPin = parseFloat(pin)
    const amount = document.getElementById('cashout-amount').value;
    // amount
    const convertAmount = parseFloat(amount)
    const balance = document.getElementById('balance').innerText;
    // balance
    const convertBalance = parseFloat(balance);
    if(convertPin === 1234){
        const sum = convertBalance - convertAmount;
        console.log(sum)
        document.getElementById('balance').innerText = sum
    }
    else{
        console.log('wrong pin')
    }
})