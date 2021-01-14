// Viết chương trình đếm và in ra số lượng các số nguyên chia hết cho 3 hoặc 7 nằm trong đoạn 1 đến 100.
var count = 0;
for (var i = 1; i <= 100; i++) {
	if (i%3 == 0 || i%7 == 0) {
		count+=1;
		document.write(i + '\t');
	}
}
document.write('<br>Có tất cả ' + count + ' số nguyên chia hết cho 3 hoặc 7 nằm trong đoạn 1 đến 100')