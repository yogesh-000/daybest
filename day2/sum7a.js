//sum of 5 random two digit numbers using increment type for loop
var s=0
var s1
for(let a=1;a<=5;a++){
    s1=Math.floor(Math.random()*90)+10
    console.log(s1)
    s=s+s1
}
console.log("sum = "+s)