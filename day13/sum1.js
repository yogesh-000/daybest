//3rd max and 3rd min without sorting
var a=[5,1,2,6,8,7]
var b=-Infinity
var c=-Infinity
var d=-Infinity
var b1=Infinity
var c1=Infinity
var d1=Infinity
for(let i=0;i<6;i++){
    if(a[i]>b){
        d=c
        c=b
        b=a[i]
    }
    else if(a[i]>c&&a[i]<b){
        d=c
        c=a[i]
    }
    else if(a[i]>d&&a[i]<c){
        d=a[i]
    }
    if(a[i]<b1){
        d1=c1
        c1=b1
        b1=a[i]
    }
    else if(a[i]<c1&&a[i]>b1){
        d1=c1
        c1=a[i]
    }
    else if(a[i]<d1&&a[i]>c1){
        d1=a[i]
    }
}
console.log("3rd max = "+d+'\n'+"3rd min = "+d1)
