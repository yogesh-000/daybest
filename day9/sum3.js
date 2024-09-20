/*
1	

1	2	

1	2	3	

1	2	3	4	
*/

var n=4
for(let i=1;i<=n;i++){
    var s=''
    for(let j=1;j<=i;j++){
        s+=j+'\t'
    }
    console.log(s+'\n')   
}