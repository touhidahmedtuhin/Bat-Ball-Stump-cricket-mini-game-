//Object create for count
let score = {
  win :0,
  lost :0,
  tie :0,
}



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

 // Determine the result for bat
let resultMsg;

if(computerChoise === 'Ball') {
  score.win ++;
  resultMsg = 'User won 🎉';
  
}
else if(computerChoise === 'Bat') {
  score.tie ++;
  resultMsg = `It's a tie 🤝`;
  
}
else {
  score.lost++;
  resultMsg = 'Computer has won 🎉';
  
}
console.log(score);
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

 // Determine the result for ball
let resultMsg;

if(computerChoise === 'Ball') {
  score.tie++;
  resultMsg =  `It's a tie 🤝`;
}
else if(computerChoise === 'Bat') {
  score.lost++;
  resultMsg = `Computer won 🎉`;
}
else {
  score.win++;
  resultMsg = 'User won 🎉';
}
console.log(score);
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

 // Determine the result stump
let resultMsg;

if(computerChoise === 'Ball') {
  score.lost++;
  resultMsg =  `Computer won 🎉`;
}
else if(computerChoise === 'Bat') {
  score.win++;
  resultMsg = `User won 🎉`;
}
else {
  score.tie++;
  resultMsg = `It's a tie 🤝`;
}
console.log(score);
document.querySelector('#computerChoice').innerText = computerChoise;
document.querySelector('#result').innerText = resultMsg;
}