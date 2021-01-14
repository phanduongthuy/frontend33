// Viết chương trình nhập vào 3 tongố M, N, K từ bàn phím. 
// Tính tổng các số chia hết cho k trong khoảng từ N đến M. 
// Lưu ý: Trong khoảng N đến M. (N<=M)
var N;
var M;
var K;
do {
	N = Number(prompt('Nhập số N:'));
	M = Number(prompt('Nhập số M:'));
} while (N > M);

K = Number(prompt('Nhập số K:'));

var tong = 0;
for (var i = N; i <= M; i++) {
	if (i % K == 0) {
		tong = tong + i;
	}
}

document.write('Tổng các số chia hết cho K trong khoảng từ N đến M: ' + tong);