//sum of digits
var n=111
var r 
var s=0
while(n){
    r=n%10
    s+=r
    n=Math.floor(n/10)
}
console.log("sum = "+s)