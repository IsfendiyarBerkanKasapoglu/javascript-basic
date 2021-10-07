function add (a, b) {
  const addresult = a + b;
  return addresult 
}

function subtract (a, b) {
  const subresult = a - b;
  return subresult
}

function multiply (a, b) {
  const mulresult = (a * b);
  return mulresult
}

function divide (a, b) {
  const divresult = (a / b);
  return divresult
}

function power (a, b) {
  const powresult = a ** b;
  return powresult 
}

function round (a) {
  const roundresult = Math.round(a);
  return roundresult
}

function roundUp (a) {
  const roundUpResult = Math.ceil(a);
  return roundUpResult
}

function roundDown (a) {
  const roundDownResult = Math.floor(a);
  return roundDownResult
}

function absolute (a) {
  const absResult = Math.abs(a);
  return absResult
}

function quotient (a, b) {
  const quaResult = ~~(a/b);
  return quaResult
}

function remainder (a, b) {
  const remResult = a%b ;
  return remResult
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
}
