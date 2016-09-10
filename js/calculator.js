 function calculatorModule(){

  let calculator = {};
  var _memory = 0;
  var _total = 0 ;

   function validate (number){
    if(typeof number !=='number'){
      throw new Error('Wrong Data Type');
    }
   }

  calculator.load = function(number){
    validate(number);
    _total=number;
    return _total;
   };

  calculator.getTotal = function(){
    return _total;
   };

  calculator.add = function(number){
    if(typeof number !=='number'){
      throw new Error('Wrong Data Type');
    }
     _total+=number;
   };

  calculator.subtract = function(number){
    if(typeof number !=='number'){
      throw new Error('Wrong Data Type');
    }
    _total-=number;
   };

  calculator.multiply= function(number){
    if(typeof number !=='number'){
      throw new Error('Wrong Data Type');
    }
    _total*=number;
   };

  calculator.divide = function(number){
    if(typeof number !=='number'){
      throw new Error('Wrong Data Type');
    }
    _total/=number;
   };

  calculator.recallMemory = function(){
    return _memory;
   };

  calculator.saveMemory = function(){
   _memory=_total;
   };

  calculator.clearMemory = function(){
    _memory = 0;
  };

  return calculator;
}
