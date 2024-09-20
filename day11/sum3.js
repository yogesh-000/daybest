//max and min without sorting
var a=[5,1,2,6,8]
var b=-Infinity
var c=Infinity
for(let i=0;i<5;i++){
    if(a[i]>b){
        b=a[i]
    }
    if(a[i]<c){
        c=a[i]
    }
}
console.log("min = "+c+'\n'+"max = "+b)