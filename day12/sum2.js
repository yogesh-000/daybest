/*
   * 
  * * 
 * * * 
* * * * 
 * * * 
  * * 
   * 
*/
var n=7
for(let i=0;i<n;i++){
    var s=''
    for(let j=n-n/2;j<n;j++){
        if(j<n-1-i||j<i){
            s+=' '
        }
        else{
            s+='* '
        }
    }
    console.log(s)
}