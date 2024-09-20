/*
*	*	*	*	

*	*	*	*	

#	#	#	#	

#	#	#	#	
*/

var n=4
var c=2
for(let i=0;i<n;i++){
    var s=''
    for(let j=0;j<n;j++){
        if(i<c){
            s+='*\t'
        }
        else{
            s+='#\t'
        }
    }
    console.log(s+'\n')
    if(i==c+1){
        c+=4
    }
}