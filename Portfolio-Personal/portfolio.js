const sectionIdMap = {  
    'sobre-mi': 'sobre-mi',  
    'proyectos': 'proyectos',  
    'contacto': 'contacto'  
};  

const showSection = (idToShow) => {  
    for (const id of Object.values(sectionIdMap)) {  
        const section = document.getElementById(id);  
        if (section) {  
            if (id !== idToShow) {  
                section.classList.add('hidden');  
            } else {  
                section.classList.remove('hidden');  
            }  
        }  
    }  
};  

 
for (const [linkId, sectionId] of Object.entries(sectionIdMap)) {  
    const linkElement = document.getElementById(linkId);  
    if (linkElement) {   
        linkElement.addEventListener('click', (event) => {  
            event.preventDefault();   
             
            const sectionElement = document.getElementById(sectionId);  
            if (sectionElement) {  
                sectionElement.scrollIntoView({ behavior: 'smooth' });  
            }  
            showSection(sectionId);  
        });  
    }  
}  

  
document.addEventListener('DOMContentLoaded', () => {  
    showSection('sobre-mi');  
}); 

const habilidades = [  
    { id: 1, nombre: 'HTML', nivel: 'Avanzado' },  
    { id: 2, nombre: 'CSS', nivel: 'Avanzado' },  
    { id: 3, nombre: 'JAVASCRIPT', nivel: 'Intermedio' },  
    { id: 4, nombre: 'PYTHON', nivel: 'Intermedio' }  
];  

const contenedorHabilidades = document.querySelector('.skills');  

const titulo = document.createElement('h1');  
titulo.textContent = 'Mis habilidades';  

habilidades.forEach(habilidad => {  
    const card = document.createElement('div');  
    card.classList.add('card');  

    const nombreHabilidad = document.createElement('h3');  
    nombreHabilidad.textContent = habilidad.nombre;  

    const nivelHabilidad = document.createElement('p');  
    nivelHabilidad.textContent = habilidad.nivel;  

    card.append(nombreHabilidad);  
    card.append(nivelHabilidad);  

    contenedorHabilidades.append(card);  
});  


