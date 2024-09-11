async function getPlanos() {
	const response = await fetch('https://retocero.api.tenbeltz.com/planos');
	const data = await response.json();
	
	console.log('Plantas:', data);
	actualizarButton(data[0])
	
	return data
	
}

async function getPlanta(numero_planta) {
	const response = await fetch('https://retocero.api.tenbeltz.com/planos');
	const data = await response.json();
	
	// console.log(data[numero_planta]);
	
	return data[numero_planta]
	
}

async function actualizarButton(planta) {

	
	let sensor_n = document.getElementById('sensor-n');
	let sensor_button = document.getElementById('sensor_button')

	let calef_n = document.getElementById('calef_n');
	let calefaccion_btn = document.getElementById('calefaccion-btn')
	let calefdiv = document.getElementById('idcalef');

	if (planta['luces'] == true) {
		sensor_n.innerHTML = "Activados"
		sensor_button.classList.add('sensor_activo')
		sensor_button.classList.remove('sensor_inactivo')
	} else {
		sensor_n.innerHTML = "Desactivados"
		sensor_button.classList.add('sensor_inactivo')
		sensor_button.classList.remove('sensor_activo')
	}

	if (planta['calefaccion'] == true) {
		calef_n.innerHTML = "Encendida"
		calefaccion_btn.classList.add('sensor_activo')
		calefaccion_btn.classList.remove('sensor_inactivo')
		calefdiv.hidden = false;

	} else {
		calef_n.innerHTML = "Apagada"
		calefaccion_btn.classList.add('sensor_inactivo')
		calefaccion_btn.classList.remove('sensor_activo')
	}
}

async function switchLuces(planta_id) {
	
	const resp = await fetch(
		'https://retocero.api.tenbeltz.com/plantas/'+planta_id+'/switch?attribute=luces&username=admin',
		{method:'PUT'});
	
	const data = await resp.json();
	
	return data
	
}

async function switchCalefaccion(planta_id) {
	
	const resp = await fetch(
		'https://retocero.api.tenbeltz.com/plantas/'+planta_id+'/switch?attribute=calefaccion&username=admin',
		{method:'PUT'});
	
	const data = await resp.json();
	
	return data
	
}

let currentPlantaId = 0
async function cambiarPlanta() {
	currentPlantaId = currentPlantaId === 0 ? 1 : 0;
	let numero_planta = currentPlantaId
	const planta = await getPlanta(numero_planta)
	actualizarButton(planta)

	let planoP1 = document.getElementById('planta1');
	let planoP2 = document.getElementById('planta2');

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


async function sensor() {
	let planta_n = document.getElementById('planta-n');
	
	const luces = await switchLuces(planta_n.innerText)
	
	const planta = await getPlanta(planta_n.innerText - 1)
	actualizarButton(planta)
	
	

	let activoP1 = document.getElementById('planoP1_on');
	let apagadoP1 = document.getElementById('planoP1_off');
	let activoP2 = document.getElementById('planoP2_on');
	let apagadoP2 = document.getElementById('planoP2_off');

	if (luces['planta']['id'] == 1) {
		if (luces['planta']['luces'] == true) {
			activoP1.style.display = 'block';
			apagadoP1.style.display = 'none';
			luces
		} else {
			activoP1.style.display = 'none';
			apagadoP1.style.display = 'block';
			luces
		}
	} else {
		if (luces['planta']['luces'] == true) {
			activoP2.style.display = 'block';
			apagadoP2.style.display = 'none';
			luces
		} else {
			activoP2.style.display = 'none';
			apagadoP2.style.display = 'block';
			luces
		}
	}

}


//encender y apagar la calefacción
async function eaCalefaccion() {
	let planta_n = document.getElementById('planta-n');
	
	const calefaccion = await switchCalefaccion(planta_n.innerText)
	
	const planta = await getPlanta(planta_n.innerText - 1)
	actualizarButton(planta)
	
	

	let activoP1 = document.getElementById('idcalef');
	let activoP2 = document.getElementById('idcalef');

	if (calefaccion['planta']['id'] == 1) {
		if (calefaccion['planta']['calefaccion'] == true) {
			activoP1.hidden = false;
			calefaccion
		} else {
			activoP1.hidden = true;
			calefaccion
		}
	} else {
		if (calefaccion['planta']['calefaccion'] == true) {
			activoP2.hidden = false;
			calefaccion
		} else {
			activoP2.hidden = true;
			calefaccion
		}
	}
	
	
	/* var calefaccionDiv = document.getElementById('calefaccion');
    var calefaccionBtn = document.getElementById('calefaccion-btn');
    
    if (calefaccionDiv.hidden) {
        calefaccionDiv.hidden = false;
        calefaccionBtn.textContent = 'Apagar calefacción';
		calefaccionBtn.classList.add('sensor_activo')
		calefaccionBtn.classList.remove('sensor_inactivo')
    } else {
        calefaccionDiv.hidden = true;
        calefaccionBtn.textContent = 'Encender calefacción';
		calefaccionBtn.classList.add('sensor_inactivo')
		calefaccionBtn.classList.remove('sensor_activo')
    } */
}

getPlanos()
var planta = getPlanta(1)
actualizarButton(planta)