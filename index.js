//加法函数
function add(a, b){
	if(typeof a != 'number' || typeof b !='number'){
		return new TypeError('Both a and b must be a number')
	}else{
        return a + b;
	}
}

module.exports.add = add;
