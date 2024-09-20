//product of pairs of digits
var n=354213
var r 
var p=1
while(n){
    r=n%100
    p*=r 
    n=Math.floor(n/100)
}
console.log("product = "+p)