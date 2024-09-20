//power of 2's using while loop
var n=3
var m=n 
var p=1
process.stdout.write(p+"^".toString())
while(n){
    p*=2
    process.stdout.write(p.toString())
    if(n>1){
        process.stdout.write("^")
    }
    n--
}
console.log("\r"+"2^"+m+" = "+p)