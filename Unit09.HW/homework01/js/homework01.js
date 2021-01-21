function show(btn,box){
	var tabs =document.getElementsByClassName('tablinks');
	var contents =document.getElementsByClassName('tabcontent');
	var btnes = document.getElementById(btn);
	var boxes = document.getElementById(box);
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove('active');
		contents[i].classList.remove('activeBox');
	}
	btnes.classList.add('active');
	boxes.classList.add('activeBox');
}