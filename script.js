function cambiarPlanta() {
	let planoP1 = document.getElementById('planoP1_off');
	let planoP2 = document.getElementById('planoP2_off');

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
	let activoP1 = document.getElementById('planoP1_on');
	let apagadoP1 = document.getElementById('planoP1_off');
	let activoP2 = document.getElementById('planoP2_on');
	let apagadoP2 = document.getElementById('planoP2_off');

	let sensor_n = document.getElementById('sensor-n');
	let sensor_button = document.getElementById('sensor_button')

	if (activoP1.style.display == 'none') {
		activoP1.style.display = 'block';
		apagadoP1.style.display = 'none';
		sensor_n.innerHTML = "Activados"
		sensor_button.classList.add('sensor_activo')
		sensor_button.classList.remove('sensor_inactivo')
	} else {
		activoP1.style.display = 'none';
		apagadoP1.style.display = 'block';
		sensor_n.innerHTML = "Desactivados"
		sensor_button.classList.add('sensor_inactivo')
		sensor_button.classList.remove('sensor_activo')
	}

	// if (activoP2.style.display == 'none') {
	// 	activoP2.style.display = 'block';
	// 	apagadoP2.style.display = 'none';
	// 	sensor_n.innerHTML = "Activados"
	// } else {
	// 	activoP2.style.display = 'none';
	// 	apagadoP2.style.display = 'block';
	// 	sensor_n.innerHTML = "Desactivados"
	// }

}
