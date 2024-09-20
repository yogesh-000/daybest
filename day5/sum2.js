//prime factors of a number
var n=72
var i=2
var a=[]
while(n>1){
    if(n%i==0){
        n/=i
        a.push(i)
    }
    else{
        i++
    }
}
a=[...new Set(a)]
console.log(a.join('\t'))