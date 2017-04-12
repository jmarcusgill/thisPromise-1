$(document).ready(function(){
	$("#my-button").click(function(e){
		// console.log("event", e);
		console.log("event.target", e.target);
		// console.log("this", $(this));  //event.target as jquery object
		console.log("this", this);  // event.target
	});
});

// window.cat = "fluffy"
// this.a = 37;
// console.log(window.a);  //37 


// Example 1
// var fubar = "42";

// function baz(){
// 	console.log("baz");
// 	bar();
// }

// function bar(){
// 	console.log("bar");
// 	foo();
// }

// function foo(){
// 	console.log("foo");
// 	var fubar = "13";
// 	console.log("this", this); //window
// 	console.log("fubar", this.fubar); //42
// }

// baz();



//Example 2:
// var a = 3;
// function foo(){
// 	console.log("this", this); //obj
// 	console.log("a", this.a); //2
// }

// var obj = {
// 	a: 2,
// 	monkey: foo
// };

// obj.monkey(); //obj

// foo(); //window



//example 3
// function foo(){
// 	console.log("this", this); //obj2
// 	console.log("a", this.a); // 32
// }

// var obj2 = {
// 	a: 32,
// 	foo: foo
// };

// var obj1 = {
// 	a: 2,
// 	obj2:obj2
// }

// obj1.obj2.foo()



//example 4
// function foo(){
// 	console.log("this", this); // window
// 	console.log("a", this.a); // global warming
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var bar = obj.foo;

// var a = "global warming";

// // obj.foo(); // obj, 2

// bar(); // window, global warming




//example 5
// function foo(){
// 	console.log("this", this); // window
// 	console.log("a", this.a); // global
// }

// function doFoo(fn){
// 	return fn();
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var a = "global";

// doFoo(obj.foo);

















