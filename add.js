let object = {'a': 100, 'b': 200, 'c':300}
let object1 ={'a': 300, 'b': 200, 'd':400}
let obj2= {}
for(var x in object){
    for (var y in object1){
        if (x==y){
            obj2[x]=object[x] + object1[y]
            break 
        }
    }
    obj2[x]=object[x]
    obj2[y]=object1[y]
}
console.log(obj2)

