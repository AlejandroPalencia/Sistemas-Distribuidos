export function hello(){
    const hello = 'hola'
    return hello + ' mundo!!'
   }
   console.log(hello())

export function miFactorial(n){
    let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 

    }