module.exports = function getZerosCount(number, base) {
	// your implementation

	let arrayOfZeros = [];
	let arrayOfPrimeNumbers = [];
	let arrayOfDegreesEveryPrime = []; 
	let localBase = base, tempPrimeNumber = 2, counterOfZeros = 0, primeInDegree = 1;

	while( localBase > 1 ) {
		let i = 0;
		while (localBase % tempPrimeNumber == 0)
    {
			if( i == 0 ){
      arrayOfPrimeNumbers.push(tempPrimeNumber);
			}
			localBase = localBase / tempPrimeNumber;
			i++;
		}
		
		if( i != 0 ){
		arrayOfDegreesEveryPrime.push(i);
		}
		tempPrimeNumber++;
	}

  for ( let i = 0; i < arrayOfPrimeNumbers.length; i++ ){

    while ( Math.pow( arrayOfPrimeNumbers[i], primeInDegree ) < number ) primeInDegree++;

    for ( let j = primeInDegree; j > 0; j-- ){
      counterOfZeros += Math.floor( number/Math.pow( arrayOfPrimeNumbers[i], j ));
    }

		arrayOfZeros.push(Math.floor(counterOfZeros/arrayOfDegreesEveryPrime[i]));
		primeInDegree = 1;
		counterOfZeros = 0;
  }

	arrayOfZeros = arrayOfZeros.sort((a, b) => {
		 return a - b;
	});
	
  counterOfZeros = arrayOfZeros[0];

	return counterOfZeros;
}
