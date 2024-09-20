//count of repeatitions
var a=['a','a','c','d','c','a','b']
var a1=[...new Set(a)]
a1.sort()
for(let i=0;i<4;i++){
    var c=0
    for(let j=0;j<7;j++){
        if(a1[i]==a[j]){
            c++
        }
    }
    console.log(a1[i]+" is "+c+" times ")   
}