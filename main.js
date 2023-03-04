let fizzBuzz = function(a){
      for(i=1; i<=a; i++){
	       if(i%3 == 0 && i%5 == 0){
		      document.write("Fizzbuzz" + "<br>");
			}
			else if(i%3 == 0){
			   document.write("Fizz" + "<br>");
			 }
			 else if(i%5 == 0){
			    document.write("Buzz" + "<br>");
			 }
			 else{
			    document.write(i + "<br>");
			}
  }
};
fizzBuzz(100);




     
			
			   
		        