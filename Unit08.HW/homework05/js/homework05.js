// Viết chương trình tính tổng: S = 1 + 1/2 + 1/3 + … + 1/n với n nguyên dương  được nhập từ bàn phím.

do{
	var n =prompt('Nhập số nguyên dương n:');
} while(n<=0);

var S = 0;

for (var i = 1; i <= n; i++) {
	S = S + 1/i;
}
document.write('Tổng S = ' + S);
