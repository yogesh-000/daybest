//second maximum
var a=[5,1,2,6,8,7]
var b=-Infinity
var c=-Infinity
for(let i=0;i<6;i++){
    if(a[i]>b){
        c=b
        b=a[i]
    }
    else if(a[i]>c&&a[i]<b){
        c=a[i]
    }
}
console.log(c)