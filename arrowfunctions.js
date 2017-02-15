var numbers = [1,2,3,4,5];

var numbers1 = numbers.map(function(number){
	return number*2;	
   }
);

console.log(numbers1);


var numbers2 = numbers.map((number) => {
	return number*2;	
   }
);

console.log(numbers2);

var add = (x, y) => {
  return x+y;
}

console.log(add(3,4));
