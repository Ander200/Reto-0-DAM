function cambiarPlanta() {
	var planoP1 = document.getElementById('planoP1');
	var planoP2 = document.getElementById('planoP2');
	
	if (planoP1.style.display === 'none') {
		planoP1.style.display = 'block';
		planoP2.style.display = 'none';
	} else {
		planoP1.style.display = 'none';
		planoP2.style.display = 'block';
	}
}
