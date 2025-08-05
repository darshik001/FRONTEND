

let USDRate = {
  USD : 1,
  INR :85.70,
  AUD :1.53,
  CNY :7.18,
  JPY :144.28,
  BRL :5.51,
  RUB :78.59,
  GPB :0.72,
  AED :3.67,
  IRR :42.05
}


document.querySelector('#convertBtn').addEventListener('click',()=>{
  let amount = document.querySelector('#amount').value
  let contry1 = document.querySelector('#contry1').value;
  let contry2 = document.querySelector('#contry2').value;
  let display = document.querySelector('#result')
  


   let USDcovert =     amount / USDRate[contry1];
   let convert   =     USDcovert * USDRate[contry2]
  
   
   display.setAttribute('value',convert.toFixed(2))

})