const nos = document.getElementsByClassName('question-box')
for (i = 0; i < nos.length ; i++) {
	nos[i].addEventListener('click' , function() {
	this.classList.toggle('active')})
	}
