/*
*	*	*	*	

	*	*	*	

		*	*	

			*	
*/

var n=4
for(let i=0;i<n;i++){
    var s=''
    for(let j=0;j<n;j++){
        if(j<i){
            s+='\t'
        }
        else{
            s+='*\t'
        }
    }
    console.log(s+'\n')
}