let dict1=[2,4,5,7]
let sum=0  
let dic={}
let i=0
while (i<dict1.length){
    sum=sum+dict1[i]
    dic[i]=sum
    i++
}
console.log(dic)