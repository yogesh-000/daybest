//sum and avg of an array
var a=[1,6,7,4,3,8,4]
var s=0
for(let i=0;i<7;i++){
    s+=a[i]
}
var v=Math.floor(s/7)
console.log("sum = "+s+'\n'+"avg = "+v)
