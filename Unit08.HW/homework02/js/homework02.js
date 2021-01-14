// Viết chương trình nhập vào số nguyên n. Tính và in ra các tổng sau:
// S = 1 + 2 + 3+ ... + n
// Lưu ý: Sử dụng vòng lặp do...while để tính
var n = prompt('Nhập số nguyên n:')
var i = 1;
var S = 0;
do {
	S+=i;
	i++;
} while (i<=n);
document.write('Tổng S = ' + S);