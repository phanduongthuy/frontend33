// function defaultsize() {
// 	for(var i = 0; i< document.getElementsByClassName('text').length; i++) {
// 		document.getElementsByClassName('text')[i].style.fontSize = "100%";
// 	}
// }
// function bigsize() {
// 	for(var i = 0; i< document.getElementsByClassName('text').length; i++) {
// 		document.getElementsByClassName('text')[i].style.fontSize = "140%";
// 	}
// }
// function smallsize() {
// 	for(var i = 0; i< document.getElementsByClassName('text').length; i++) {
// 		document.getElementsByClassName('text')[i].style.fontSize = "60%";
// 	}
// }
 


var a = document.getElementById("default");
var s = text.style.fontSize;
a.addEventListener('click',function(){
	text.style.fontSize=s;
});

var b = document.getElementById("big");
b.addEventListener('click',function(){
	var size = text.style.fontSize;
	if (text.style.fontSize == size) {
		size = parseInt(size);
		var s = size + (size * 40)/100;
		var c = s.toString()+"px";
		text.style.fontSize = c;
	}
});

var c = document.getElementById("small");
c.addEventListener('click',function(){
	var size = text.style.fontSize;
	if(text.style.fontSize == size) {
		size = parseInt(size);
		var s = size - (size * 40)/100;
		var c = s.toString()+"px";
		text.style.fontSize = c;
	}	
});