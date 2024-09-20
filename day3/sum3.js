//sum of pairs of digits
var n=122131
var r 
var s=0
while(n){
    r=n%100
    s+=r
    n=Math.floor(n/100)
}
console.log("sum = "+s)