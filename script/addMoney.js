document.getElementById('add-money').addEventListener('click', function(event){
    const pin = document.getElementById('pin').value;
    // pin
    const convertPin = parseFloat(pin)
    const amount = document.getElementById('amount').value;
    // amount
    const convertAmount = parseFloat(amount)
    const balance = document.getElementById('balance').innerText;
    // balance
    const convertBalance = parseFloat(balance);
    
    if(convertPin === 1234){
        const sum = convertAmount + convertBalance;
        document.getElementById('balance').innerText = sum
    }
    else{
        console.log('wrong pin')
    }
})