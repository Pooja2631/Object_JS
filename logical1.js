let list1=['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
let list2=[85, 98, 89, 92]
let list3=['s001','s002','s003','s004','s005']
let b={}
let i=0
while (i<list1.length){
    let a={}
    a[list1[i]]=list2[i]
    let j=0
    while (j<list3.length){
        b[list3[i]]=a
        j++ 
    i++
    }
    console.log(b)
}

