
var myCalculator =calculatorModule();
var currentDisplay = 0;
var theDisplay = document.getElementById('display');
theDisplay.innerHTML = currentDisplay ;

var storedNum = 0;

function clearDisplay(num){
  var display = document.getElementById('display');
  display.innerHTML = num;
}
var clear = document.getElementById('clear');
clear.addEventListener('click', function(){
myCalculator.clearMemory();
clearDisplay('');
});

function updatedisplay(newcontent) {
    var display = document.getElementById('display');
    display.innerHTML = display.innerHTML + newcontent;
  }

    var addThings = document.getElementById('add');
    addThings.addEventListener('click', function(){
      storedNum = Number(theDisplay.innerHTML);
      var result = myCalculator.add(Number(storedNum));
      console.log(myCalculator.getTotal());
      clearDisplay('');







  });
//}

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