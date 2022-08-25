// var my_dict = {
//     'data1':100,
//     'data2': -54,
//     'data3': 247
//    }
// var sum=0

// for(i in my_dict){
//     sum+=my_dict[i]
// }
// console.log("Total:",sum)


var myDict= {
    1: 'NAVGURUKUL',
    2: 'IN',
    3:{  
         'A' : 'WELCOME',
         'B' : 'To',
         'C' : 'DHARAMSALA'
        }
    }
 for (i in myDict){
    if ((typeof myDict[i]) === "object"){
        delete myDict[i]['A']
    }
 }
 console.log(myDict);