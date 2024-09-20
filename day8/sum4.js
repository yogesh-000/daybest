//equilateral triangle
var n=4
for(let i=1;i<=n;i++){
    var s=''
    for(let j=n;j>=1;j--){
        if(i>=j){
            s+='* '
        }
        else{
            s+=' '
        }
    }
    console.log(s)
}