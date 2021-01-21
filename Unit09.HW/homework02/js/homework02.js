
// console.log(document.frm.check);
function checkall() {
	for (var i = 0; i < document.frm.check.length; i++) {
			document.frm.check[i].checked = true;	
	}
}
function uncheckall(){
	for (var i = 0; i < document.frm.check.length; i++) {
		if(document.frm.check[i].checked == true){
			document.frm.check[i].checked = false;	
		}
	}
}