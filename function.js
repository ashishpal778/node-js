// function sayhi(){
// 	console.log('hi');
// }
// sayhi();



// var saybye=function(){  //anonymous function
// 	console.log("bye");
// }
// saybye();


function callFun(fun){
	fun();
}
var saybye =function(){
	console.log("byee");
}
callFun(saybye);