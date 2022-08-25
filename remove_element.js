let dict1={'C1': [10, 20, 30], 'C2': [20, 30, 40], 'C3': [12, 34]}
for (var i in dict1){
    dict1[i].pop()
}
console.log(dict1)
