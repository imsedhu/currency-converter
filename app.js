let select = document.querySelectorAll(".drop-down")
let btn = document.querySelector("#btn")
let input = document.querySelector("#input")
let result = document.querySelector("#result")

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json()) 
.then(res=>dropDown(res))

function dropDown(res){
  let curr = Object.entries(res)
  for(let i=0; i<curr.length; i++){
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML += opt
    select[1].innerHTML += opt
  }
}

btn.addEventListener('click',()=>{
  let curr1 = select[0].value
  let curr2 = select[1].value
  let inputVal = input.value
  if(curr1 === curr2){
    alert("Please select different currencies!!")
  }else{
    currencyConvert(curr1,curr2,inputVal)
  }
})

function currencyConvert(curr1,curr2,inputVal) {
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    /* alert(`10 GBP = ${data.rates.USD} USD`); */
    result.value = Object.values(data.rates)[0]
  });
}