var	h = prompt('Nhập chiều cao h =')

// Hình 1:
 
for (var i = 0; i < h; i++) {
	for (var j = 0; j <= i; j++) {
		document.write(' * ');
	}
	document.write('<br>');
}

document.write('<hr>');

// Hình 2:

for (var i = 0; i < h; i++) {
	for (var j = 0; j < h; j++) {
		document.write(' * ');
	}
	document.write('<br>');
}

document.write('<hr>');

// Hình 3:

for (var i = 0; i < h; i++) {
	for (var j = 0; j < h; j++) {
		if (i == 0 || i == h - 1 || j == 0|| j == h - 1 ) {
			document.write('*');
		} else {
			document.write('&nbsp;' + '&nbsp;');
		} 
		
	}
	document.write('<br>');
}
document.write('<hr>');

// Hình 4:

for (var i = 0; i < h; i++) {
	for (var j = h - 1; j >= i; j--) {
		document.write(' * ');
	}
	document.write('<br>');
}
