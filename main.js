function batButton() {
   // Generate random number and computer's choice
let randomNumber = Math.random()*3;
let computerChoise;

if(randomNumber > 0 && randomNumber<=1) {
  computerChoise = 'Bat';
}
else if (randomNumber >1 && randomNumber <=2) {
  computerChoise = 'Ball';
}
else {
  computerChoise = 'Stump';
}

 // Determine the result
let resultMsg;

if(computerChoise === 'Ball') {
  resultMsg = 'User won 🎉';
}
else if(computerChoise === 'Bat') {
  resultMsg = `It's a tie 🤝`;
}
else {
  resultMsg = 'Computer has won 🎉';
}

document.querySelector('#computerChoice').innerText = computerChoise;
document.querySelector('#result').innerText = resultMsg;
}

function ballButtton() {
// Generate random number and computer's choice
let randomNumber = Math.random()*3;
let computerChoise;

if(randomNumber > 0 && randomNumber<=1) {
  computerChoise = 'Bat';
}
else if (randomNumber >1 && randomNumber <=2) {
  computerChoise = 'Ball';
}
else {
  computerChoise = 'Stump';
}

 // Determine the result
let resultMsg;

if(computerChoise === 'Ball') {
  resultMsg =  `It's a tie 🤝`;
}
else if(computerChoise === 'Bat') {
  resultMsg = `Computer won 🎉`;
}
else {
  resultMsg = 'User won 🎉';
}

document.querySelector('#computerChoice').innerText = computerChoise;
document.querySelector('#result').innerText = resultMsg;
}

function stumpButton() {
  // Generate random number and computer's choice
let randomNumber = Math.random()*3;
let computerChoise;

if(randomNumber > 0 && randomNumber<=1) {
  computerChoise = 'Bat';
}
else if (randomNumber >1 && randomNumber <=2) {
  computerChoise = 'Ball';
}
else {
  computerChoise = 'Stump';
}

 // Determine the result
let resultMsg;

if(computerChoise === 'Ball') {
  resultMsg =  `Computer won 🎉`;
}
else if(computerChoise === 'Bat') {
  resultMsg = `User won 🎉`;
}
else {
  resultMsg = `It's a tie 🤝`;
}

document.querySelector('#computerChoice').innerText = computerChoise;
document.querySelector('#result').innerText = resultMsg;
}