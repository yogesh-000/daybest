//min and max with sorting
var s=[3,9,8,1,2]
for(let i=0;i<5;i++){
    for(let j=i+1;j<5;j++){
        if(s[i]>s[j]){
            var c=s[i]
            s[i]=s[j]
            s[j]=c
        }
    }
}
console.log("min = "+s[0]+'\n'+"max = "+s[4])
