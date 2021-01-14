// Viết chương trình in ra tổng của 10 số chẵn đầu tiên.
 
var S = 0;

for (var i = 0; i <= 9; i++) {
	S = S + i * 2;
}
document.write('Tổng của 10 số chẵn đầu tiên S = ' + S);