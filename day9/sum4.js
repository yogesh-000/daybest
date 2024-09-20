/*			2	

		2	4	

	2	4	6	

2	4	6	8	
*/	

var n=4
for(let i=0;i<n;i++){
    var s=''
    var k=2
    for(let j=0;j<n;j++){
        if(j<n-1-i){
            s+='\t'
        }
        else{
            s+=k+'\t'
            k+=2
        }
    }
    console.log(s+'\n')
}