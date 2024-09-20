//product of digits
var n=121
var r 
var p=1
while(n){
    r=n%10
    p*=r 
    n=Math.floor(n/10)
}
console.log("product = "+p)