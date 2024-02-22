let calculation = '';
document.querySelector('#calculation').innerHTML = `${localStorage.getItem('calculation')}`

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  document.querySelector('#calculation').innerHTML = `${calculation}`
  localStorage.setItem('calculation', calculation);
}

function handleClear() {
  calculation = '0';
  localStorage.setItem('calculation', 0);
  document.querySelector('#calculation').innerHTML = `${calculation}`
  console.log(calculation);
}

function handleEval() {
  calculation = eval(calculation);
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
  document.querySelector('#calculation').innerHTML = `${calculation}`
}