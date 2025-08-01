/* // Importe a função createButton do seu arquivo.
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
console.log('Botões criados e adicionados ao DOM.'); */

//===============================================================================================================================================================
import { dom } from './utils/dom-helpers.js'; // Importe o módulo dom
// import { ButtonComponent } from './components/button.js';
/* document.addEventListener('DOMContentLoaded', () => {
    const button1 = new ButtonComponent('Enviar Dados', alerta);
    document.getElementById('btn1').appendChild(button1.getElement());

    const button2 = new ButtonComponent('Cancelar', () => console.log('Operação cancelada!'), 'my-custom-button-cancel');
    document.getElementById('btn2').appendChild(button2.getElement());
    //button2.disable();


    function alerta() {
        alert('Dados enviados com sucesso!');
        console.log('Dados enviados com sucesso!');
    }
}); */
const btn = dom.createElement('button', { id: 'meuBotao', class: 'my-custom-button-ok' },[dom.createTextNode('Clique')],() => { alert('Clicou no botão!'); console.log('Clicou no botão!'); });        
document.body.appendChild(btn);

//diferença entre o createElement e o createButton é que o createButton já tem um texto padrão e um evento de click, enquanto o createElement é mais genérico e você pode personalizar mais.

const btn2 = document.createElement('button');
btn2.id = 'meuBotao2';
btn2.className = 'my-custom-button-cancel';
btn2.textContent = 'Clique Aqui';
btn2.onclick = () => { alert('Ação cancelada!'); console.log('Ação cancelada!'); };
btn2.addEventListener('click', () => {
    console.log('Clicou no botão 2 denovo!')}) ;
document.body.appendChild(btn2);// Agora sim, btn está no DOM.


// eu soh queira provar um ponto onde nao compensa renomear o objeto document do DOM.
//===================================================================================================================================================================
/* document.addEventListener('DOMContentLoaded', () => {
           const container = document.getElementById('container-botoes');
             const injetContext = document.getElementById('contexto');

           // Exemplo de criação de botão programaticamente
           const newButton = document.createElement('my-button');
           newButton.textContent = 'Botão Criado via JS'; // Adiciona texto via textContent
           newButton.addEventListener('buttonClick', (event) => {
               
               alert('Botão criado via JS clicado!');
           });
           container.appendChild(newButton);

           // Exemplo de manipulação de um botão existente
           const sendButton = document.querySelector('my-button[text="Enviar Dados"]');
           if (sendButton) {
               sendButton.addEventListener('buttonClick', (event) => {
                   inserirContexto();
                   console.log('Evento do botão "Enviar Dados":', event.detail);
                   alert('Dados estão sendo enviados!');
               });

               // Desabilitar o botão de enviar dados após 3 segundos
               setTimeout(() => {
                   sendButton.disable(); // Chama o método público do Web Component
                   sendButton.setText('Enviado!'); // Altera o texto
               }, 3000);
           }
          
                     // Exemplo de como reagir ao evento de qualquer 'my-button' no documento
           document.addEventListener('buttonClick', (event) => {
               console.log('Um my-button foi clicado em algum lugar:', event.detail);
               // Você pode adicionar lógica global aqui
           });
           function inserirContexto (){
injetContext.innerHTML = 'Conteudo inserido';
           }
           
       }); */