/*
   * 
  * * 
 *   * 
* * * * 
*/

var n=4
for(let i=0;i<n;i++){
    var s=''
    for(let j=0;j<n;j++){
        if(j<n-1-i){
            s+=' '
        }
        else if(i==n-1||j==n-1-i||j==n-1){
            s+='* '
        }
        else{
            s+='  '
        }
    }
    console.log(s)
}