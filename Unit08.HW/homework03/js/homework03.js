// Viết chương trình tính tổng S = 1 /1! + 2 /2! + ….+ n / n! với n nguyên dương được nhập từ bàn phím.
var n = prompt('nhập số nguyên dương n:');
var S = 0;
var gt = 1;
for (var i = 1; i <= n; i++) {
	gt = gt * i;
	S = S + i/gt;
}
document.write('Tổng S = ' + S);