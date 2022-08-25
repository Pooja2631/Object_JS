let a={}
let i=0
while (i<4){
    let input=require("readline-sync")
    let name = input.question("enter name....")
    let num = input.questionInt("enter num1....")
    a[name]=num
    i++
}
console.log(a)

