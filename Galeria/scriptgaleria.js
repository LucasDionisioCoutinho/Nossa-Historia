const gM = document.querySelector('.galeria-modal');
const iGM = document.querySelector('.galeria-modal img');

function fecharGaleria() {
    gM.style.visibility = 'hidden';
    iGM.style.transform = 'scale(0)';
}

function abrirGaleria(src) {
    gM.style.visibility = 'visible';
    iGM.style.transform = 'scale(1)';
    iGM.src = src; 
}
