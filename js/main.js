// Importe a função createButton do seu arquivo.
// O caminho é relativo ao HTML, então './js/components/button.js' ou '../js/components/button.js'
// dependendo de onde seu HTML está em relação à pasta 'js'.
// Assumindo que seu HTML está na raiz e 'js' é uma pasta irmã:
import { createButton } from './components/button.js';

// Opcional: Você pode colocar esta lógica dentro do seu 'index.js'
// se você quiser centralizar todo o JavaScript de inicialização lá.
// Se colocar em 'index.js', lembre-se de que 'index.js' também precisaria ser 'type="module"'
// e usar a sintaxe 'import'.

document.addEventListener('DOMContentLoaded', () => {
    const saveConfig = document.getElementById('save-config');
    const container = document.getElementById('button-container');

    // Crie uma instância do seu botão
    const myNewButton = createButton(
        'Salvar Configurações',
        () => { // Esta é a função que será executada ao clicar
            alert('Configurações salvas!');
            console.log('Botão de salvar configurações clicado!');
        }
    );

    // Anexe o botão ao container na sua página HTML
    if (saveConfig) {
        container.appendChild(myNewButton);
    }

    // Você pode criar quantos botões quiser
    const anotherButton = createButton(
        'Limpar Formulário',
        () => {
            console.log('Formulário limpo!');
            // Aqui você colocaria a lógica para limpar seus campos
        }
    );
    if (container) {
        container.appendChild(anotherButton);
    }
});
console.log('Botões criados e adicionados ao DOM.');