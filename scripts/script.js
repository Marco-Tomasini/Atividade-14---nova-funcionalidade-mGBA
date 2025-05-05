window.addEventListener('DOMContentLoaded', () => {
    const ROM   = document.getElementById('ROM');
    const BIOS  = document.getElementById('BIOS');
    const romName  = document.getElementById('romName');
    const biosName = document.getElementById('biosName');
  
    //ROM selecionada
    ROM.addEventListener('change', () => {
      if (ROM.files.length > 0) {
        romName.textContent = ROM.files[0].name;
      }
    });
  
    //BIOS selecionada
    BIOS.addEventListener('change', () => {
      if (BIOS.files.length > 0) {
        biosName.textContent = BIOS.files[0].name;
      }
    });
  });
  
    //verificar para iniciar
    function validarArquivos(){
        const hasRom  = ROM.files.length > 0;
        const hasBios = BIOS.files.length > 0;
    
        if (hasRom && hasBios) {
            alert('Seu jogo irá iniciar em breve...');
        } else {
            alert('Por favor insira os arquivos corretamente!');
        }
    }