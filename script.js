function cambiarPlanta() {
	var planoP1 = document.getElementById('planoP1');
	var planoP2 = document.getElementById('planoP2');
	let planta_n = document.getElementById('planta-n');
	
	if (planoP1.style.display === 'none') {
		planoP1.style.display = 'block';
		planoP2.style.display = 'none';
		planta_n.innerHTML = "1"
	} else {
		planoP1.style.display = 'none';
		planoP2.style.display = 'block';
		planta_n.innerHTML = "2"
	}
}

function sensor() {
	var planoP1 = document.getElementById('planoP1');
	var planoP2 = document.getElementById('planoP2');
	let planta_n = document.getElementById('planta-n');
	
	if (planoP1.style.display === 'none') {
		planoP1.style.display = 'block';
		planoP2.style.display = 'none';
		planta_n.innerHTML = "1"
	} else {
		planoP1.style.display = 'none';
		planoP2.style.display = 'block';
		planta_n.innerHTML = "2"
	}
}
