//order descending
var s=[6,4,7,2,5]
for(let i=0;i<5;i++){
    for(let j=i+1;j<5;j++){
        if(s[i]<s[j]){
            var c=s[i]
            s[i]=s[j]
            s[j]=c
        }
    }
}
console.log(s)