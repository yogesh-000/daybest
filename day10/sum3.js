//count of repeatitions
var a=[3,4,3,6,4,4,6,8]
var a1=[...new Set(a)]
for(let i=0;i<4;i++){
    var c=0
    for(let j=0;j<8;j++){
        if(a1[i]==a[j]){
            c++
        }
    }
    console.log(a1[i]+" is "+c+" times ")   
}