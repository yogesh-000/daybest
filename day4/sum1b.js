//power if 2's using decrement type for loop
var n=2
var p=1
process.stdout.write(p+"^".toString())
for(let a=n;a>=1;a--){
    p*=2
    process.stdout.write(p.toString())
    if(a>1){
        process.stdout.write("^")
    }
}
console.log("\r"+"2^"+n+" = "+p)