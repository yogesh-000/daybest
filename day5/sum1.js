//prime or not
var n=13
var c=0
if(n!=2&&n!=3){
    if(n%2==0||n%3==0||n<=1){
        c=1
    }
    else{
        for(let i=5;i*i<=n;i+=6){
            if(n%i==0||n%(i+2)==0){
                c=1
                break
            }
        }
    }
}
if(c==0){
    console.log("prime")
}
else{
    console.log("not prime")
}