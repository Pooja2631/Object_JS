function update_dic(a,b){
	for(key in b){
		a[key]=b[key]
    }
	return a;
}
var  a = {1:45,4:56}
var b  = {1:56,6:67,67:67}
a = update_dic(a,b)
console.log(a)