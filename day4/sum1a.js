//power of 2's using increment type for loop
var n=3
var p=1
process.stdout.write(p+"^".toString())
for(let a=1;a<=n;a++){
    p*=2
    process.stdout.write(p.toString())
    if(a<n){
        process.stdout.write("^")
    }
}
console.log("\r"+"2^"+n+" = "+p)