	var euler1 = function(){

		
		var input= document.getElementById('p1_input'); //Input from p1_input
		var total=0;

		for(var i=0; i<input.value; i++){
			if (i%3===0 || i%5===0){
				total+=i;
			}
		}


	console.log(total)

	console.log("total"+total);

		//Solution goes to p1_ans
		document.getElementById('p1_ans').innerHTML = total;
	}


	var euler2 = function(){

		var input= document.getElementById('p2_input');
		var fibPH=0;
		var fib1=1
		var fib2=2;
		var even=0;

		while(fib2+fib1<input.value){

			fibPH=fib2;
			fib2+=fib1;
			fib1=fibPH;
			if (fib1%2===0){
				even+=fib1;
			}

		};

		if (fib2%2===0){
			even+=fib2;
		}
		console.log("fib1 is "+fib1);
		console.log("fib2 is "+fib2);
		console.log("even is "+even);
		document.getElementById("p2_ans").innerHTML= even;
	}


	


	

	var primes = function(){

		var primes=[2];
		var limit=10000;
		var result=0;
		
		for (var i=3; i<=limit; i++){
			var count=0;
			
			for (var j=0; j<=primes.length; j++){
				if (i%primes[j]===0 && i!==j){
					break;
				}

				else if (j>primes.length-1){
					primes.push(i);
					break;
				}
			
		}

		}
		primesArray=primes;
		console.log("PRIMES is running");
		return primesArray;
	}

	var euler3 = function(){

		//Two methods: Divide the number until I get a number not divisible by primes until 100.
		//Second method, divide by every prime and see which is the biggest prime, out of 10.000 which i%prime===0

		//SECOND METHOD
		
		var primesArray=primes();	
		var number=document.getElementById("p3_input");
		var result=0;

		console.log(primesArray);
		
		for (var i=0; i<=primesArray.length; i++){
			//console.log(number+" "+primesArray[i]); //temporary
			if (number.value%primesArray[i]===0){
				result=primesArray[i];
				console.log("inside prime= "+primesArray[i])
			}

		}
		console.log("max factor is "+result);
		document.getElementById("p3_ans").innerHTML=result;
	
	}

