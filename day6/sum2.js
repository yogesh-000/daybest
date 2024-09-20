//array reverse
var a=[1,2,3,4,5]
var n=a.length-1
var c
var j=n
for(let i=0;i<n/2;i++){
    c=a[i]
    a[i]=a[j]
    a[j]=c
    j--
}
console.log(a.join('\n'))
