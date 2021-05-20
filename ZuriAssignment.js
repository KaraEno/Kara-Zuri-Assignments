function checkYuGiOh(n){
    let numbers = [];
    for(let i = 1; i <= n; i++){
        numbers.push(i);
    }
   for (let i = 0; i < numbers.length; i++){
       if (numbers[i] % 2 == 0 && numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
        numbers[i] = "Yu-Gi-Oh";
       }
       else if (numbers[i] % 2 == 0 && numbers[i] % 3 == 0) {
        numbers[i] = "Yu-Gi";
       } else if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0){
        numbers[i] = "Gi-Oh";
       }
       else if (numbers[i] % 2 == 0 && numbers[i] % 5 == 0) {
        numbers[i] = "Yu-Oh";
       }
       else if (numbers[i] % 2 == 0 ) {
          numbers[i] = "Yu";
       }
       else if (numbers[i] % 3 == 0) {
        numbers[i] = "Gi";
       }
       else if (numbers[i] % 5 == 0) {
        numbers[i] = "Oh"
       }
   }
   if(isNaN(n)){
       return `invalid parameter: "${n}"`
   }else{
    return numbers;
   }
}


function convertFahrToCelsius(num){
    if (typeof num == "string") {
       if (isNaN(num)) {
         return `"${num}" is not a valid number but a ${typeof num} `
       }
    }else if (Array.isArray(num)) {
        // typeof an array is an object. I had to specify that I am dealing with an array
        return `[${num}] is not a valid number but an array `
    }
    else if (typeof num == "object") {
            return `{${Object.keys(num)} : ${Object.values(num)}} is not a valid number but a ${typeof num}`
        }
    
  var convertToCelsius = (num - 32) * 5/9;
  return `${(convertToCelsius.toFixed(4))} °C`;
}


