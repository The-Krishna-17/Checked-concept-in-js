const myCheckBox = document.querySelector('#myCheckBox');
const visaBtn = document.querySelector('#visaBtn');
const masterCardBtn = document.querySelector('#masterCardBtn');
const payPalBtn = document.querySelector('#payPalBtn');
const subResult = document.querySelector('#subResult');
const paymentResult = document.querySelector('#paymentResult');
const mySubmit = document.querySelector('#mySubmit')

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = 'You are Subscribed'
    }else{
        subResult.textContent = 'You are not Subscribed'
    }

    if(visaBtn.checked){
        paymentResult.textContent = 'You are paying with visa'
    }else if(masterCardBtn.checked){
        paymentResult.textContent = 'You are paying with master card'
    }else if(payPalBtn.checked){
        paymentResult.textContent = 'You are paying with Paypal'
    }else{
        paymentResult.textContent = 'You most choose a payment method'
    }
};
