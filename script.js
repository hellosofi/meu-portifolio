// janelas
const janelas = document.querySelectorAll('.apresentacao-projetos');

janelas.forEach(janela => {
    const titleBar = janela.querySelector('.title-bar');
    

    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    titleBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        
        startX = e.clientX;
        startY = e.clientY;

        if (window.getComputedStyle(janela).position !== 'absolute') {
            const rect = janela.getBoundingClientRect();

            janela.style.width = rect.width + 'px';
            janela.style.height = rect.height + 'px';
            janela.style.left = rect.left + 'px';
            
            janela.style.top = (rect.top + window.scrollY) + 'px'; 
            
            janela.style.position = 'absolute';
            janela.style.margin = '0'; 
        }


        janelas.forEach(j => j.style.zIndex = '10');
        janela.style.zIndex = '100';


        initialLeft = parseInt(window.getComputedStyle(janela).left, 10) || 0;
        initialTop = parseInt(window.getComputedStyle(janela).top, 10) || 0;
    });


    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault(); 

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

       
        janela.style.left = (initialLeft + dx) + 'px';
        janela.style.top = (initialTop + dy) + 'px';
    });


    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});


// load dnv
window.addEventListener('load', function() {
    
    document.body.classList.remove('carregando');
});