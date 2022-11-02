function Primes(z) {
  let x="True";
  for(let i=2;i<z;i++){
      if(z%i==0){
          x="False";
          break;
      }
  }console.log(x);
}
