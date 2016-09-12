
var myCalculator =calculatorModule();
var operation = null;
var currentDisplay = '';
var numberstore =0;

var theDisplay = document.getElementById('display');
theDisplay.innerHTML = currentDisplay ;

var storedNum = 0;

function clearDisplay(num){
  var display = document.getElementById('display');
  display.innerHTML = num;
}
var clear = document.getElementById('clear');
clear.addEventListener('click', function(){
  //myCalculator.clearMemory();
  clearDisplay('');
});

function updatedisplay(newcontent) {
  var display = document.getElementById('display');
  display.innerHTML = display.innerHTML + newcontent;
}

var addNumbers = document.getElementById('add');
addNumbers.addEventListener('click', function(){
  storedNum = parseFloat(theDisplay.innerHTML);
  myCalculator.load(storedNum);
  clearDisplay('');
  operation = 'add';
});

var subtractNumbers = document.getElementById('subtract');
subtractNumbers.addEventListener('click', function(){
  storedNum = parseFloat(theDisplay.innerHTML);
  myCalculator.load(storedNum);
  clearDisplay('');
  operation = 'subtract';
});

var multiplyNumbers = document.getElementById('multiply');
multiplyNumbers.addEventListener('click', function(){
  storedNum = parseFloat(theDisplay.innerHTML);
  myCalculator.load(storedNum);
  clearDisplay('');
  operation = 'multiply';
});

var divideNumbers = document.getElementById('divide');
divideNumbers.addEventListener('click', function(){
  storedNum = parseFloat(theDisplay.innerHTML);
  myCalculator.load(storedNum);
  clearDisplay('');
  operation = 'divide';
});

var period = document.getElementById('period');
period.addEventListener('click', function(){
  theDisplay.innerHTML += '.';
});


var equals = document.getElementById('equal');
equals.addEventListener('click', function(){
  storedNum = parseFloat(theDisplay.innerHTML);
  switch (operation){
    case 'add':
      myCalculator.add(storedNum);
      break;
    case 'subtract':
      myCalculator.subtract(storedNum);
      break;
    case 'multiply':
      myCalculator.multiply(storedNum);
      break;
    case 'divide':
      myCalculator.divide(storedNum);
      break;
  }
  theDisplay.innerHTML = myCalculator.getTotal();
});

var deposit = document.getElementById('deposit');
deposit.addEventListener('click', function(){
  storedNum = parseFloat(theDisplay.innerHTML);
  numberstore+=storedNum;
  clearDisplay('');
});

var balance = document.getElementById('balance');
balance.addEventListener('click', function(){
  storedNum = parseFloat(theDisplay.innerHTML);
  theDisplay.innerHTML = numberstore;
});

var withdraw = document.getElementById('withdraw');
withdraw.addEventListener('click', function(){
  storedNum = parseFloat(theDisplay.innerHTML);
  theDisplay.innerHTML = numberstore -= theDisplay.innerHTML;

});


var zero = document.getElementById('0');
zero.addEventListener('click', function(){
  updatedisplay('0');
});
var one = document.getElementById('1');
one.addEventListener('click', function(){
  updatedisplay('1');
});
var two = document.getElementById('2');
two.addEventListener('click', function(){
  updatedisplay('2');
});
var three = document.getElementById('3');
three.addEventListener('click', function(){
  updatedisplay('3');
});
var four = document.getElementById('4');
four.addEventListener('click', function(){
  updatedisplay('4');
});
var five = document.getElementById('5');
five.addEventListener('click', function(){
  updatedisplay('5');
});
var six = document.getElementById('6');
six.addEventListener('click', function(){
  updatedisplay('6');
});
var seven = document.getElementById('7');
seven.addEventListener('click', function(){
  updatedisplay('7');
});
var eight = document.getElementById('8');
eight.addEventListener('click', function(){
  updatedisplay('8');
});
var nine = document.getElementById('9');
nine.addEventListener('click', function(){
  updatedisplay('9');
});

