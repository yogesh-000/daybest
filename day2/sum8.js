//product of 5 two digit random numbers using for loop 
var s=1
var s1
for(let a=1;a<=5;a++){
    s1=Math.floor(Math.random()*90)+10
    console.log(s1)
    s=s*s1
}
console.log("product = "+s)