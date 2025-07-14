const ramos = [
  { id: 'ingles1', nombre: 'Inglés 1', requisitos: [] },
  { id: 'introKine', nombre: 'Introducción a la kinesiología', requisitos: [] },
  { id: 'morfo1', nombre: 'Morfología y función 1', requisitos: [] },
  { id: 'fisicaMat', nombre: 'Fund. físicos matemáticos', requisitos: [] },
  { id: 'biocel', nombre: 'Fun. de biología celular e hi.', requisitos: [] },
  { id: 'ingles2', nombre: 'Inglés 2', requisitos: ['ingles1'] },
  { id: 'comCientifica', nombre: 'Com. científica en salud', requisitos: [] },
  { id: 'biofisica', nombre: 'Biofísica', requisitos: ['fisicaMat'] },
  { id: 'actFisica', nombre: 'Actividad física y salud', requisitos: [] },
  { id: 'morfo2', nombre: 'Morfología y función 2', requisitos: ['morfo1'] },
  { id: 'quimBioSalud', nombre: 'Fun. de qui. y bio. área salud', requisitos: [] },
  { id: 'fisiologia', nombre: 'Fisiología general', requisitos: ['morfo2', 'biofisica'] },
  { id: 'movHumano1', nombre: 'Bases del mov. humano 1', requisitos: ['actFisica'] },
  { id: 'comunidad1', nombre: 'Fund. del actuar comunitario', requisitos: [] },
  { id: 'vida1', nombre: 'Fund. físicos y psicológicos del curso de vida 1', requisitos: [] },
  { id: 'bioestad', nombre: 'Bioestadística', requisitos: [] },
  { id: 'kineEvidencia', nombre: 'Kine basada en la evidencia', requisitos: [] },
  // ... Continúa hasta sexto año
];

const aprobados = new Set();

function puedeAprobarse(ramo) {
  return ramo.requisitos.every(req => aprobados.has(req));
}

function crearMalla() {
  const contenedor = document.getElementById('malla-container');

  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.classList.add('ramo');
    div.id = ramo.id;
    div.innerText = ramo.nombre;

    div.addEventListener('click', () => {
      if (aprobados.has(ramo.id)) return; // Ya aprobado
      if (puedeAprobarse(ramo)) {
        div.classList.add('aprobado');
        aprobados.add(ramo.id);
      } else {
        alert('Debes aprobar los requisitos previos.');
      }
    });

    contenedor.appendChild(div);
  });
}

crearMalla();
