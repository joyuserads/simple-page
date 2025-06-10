document.addEventListener('DOMContentLoaded', () => {

    // --- Referências aos elementos do DOM ---
    const changeThemeBtn = document.getElementById('changeThemeBtn');
    const body = document.body; // Referência ao body para mudar o fundo

     // --- Funções de Ajuda ---
       // Função para gerar uma cor hexadecimal aleatória
    function getRandomHexColor() {
        // Gera um número hexadecimal de 6 dígitos
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        // Garante que tenha 6 dígitos, preenchendo com zeros à esquerda se necessário
        return '#' + randomColor.padStart(6, '0');
    }


    // Evento para mudar a cor de fundo ao clicar no botão 'Mudar Tema'
    changeThemeBtn.addEventListener('click', () => {
        const newColor = getRandomHexColor(); // Gera uma nova cor aleatória
        body.style.backgroundColor = newColor; // Aplica a cor ao body
        // Opcional: Salvar a cor do tema no LocalStorage para que ela persista
        localStorage.setItem('themeColor', newColor);
    });

     // Carrega a cor do tema salva (se houver), ou define uma padrão
    const savedThemeColor = localStorage.getItem('themeColor');
    if (savedThemeColor) {
        body.style.backgroundColor = savedThemeColor;
    } else {
        // Se não houver cor salva, use a cor padrão do CSS ou gere uma inicial
        // body.style.backgroundColor = getRandomHexColor(); // Descomente para começar com cor aleatória
    }

})