//fibonacci series
var n=10
var a=-1
var b=1
var c
for(let i=1;i<=n;i++){
    c=a+b
    a=b
    b=c
    process.stdout.write(c.toString()+'\t')
}