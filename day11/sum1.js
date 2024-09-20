//max without sorting
var a=[2,5,1,3,8,9]
var b=-Infinity
for(let i=0;i<6;i++){
    if(a[i]>b){
        b=a[i]
    }
}
console.log("max = "+b)