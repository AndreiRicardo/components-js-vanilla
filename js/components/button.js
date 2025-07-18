/* export function createButton(text, onclickHandler, className = 'my-custom-button') {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    if (onclickHandler && typeof onclickHandler === 'function') {
        button.addEventListener('click', onclickHandler);
    }
    return button;
} */

/* ====================================================================================================================================================================
    // ButtonComponent.js
/* class ButtonComponent {
    constructor(text, onClickHandler, className = 'my-custom-button-ok') {
        this.buttonElement = document.createElement('button');
        this.buttonElement.textContent = text;
        this.buttonElement.className = className;
        if (onClickHandler) {
            this.buttonElement.addEventListener('click', onClickHandler);
        }
    }

    // Método para obter o elemento HTML do componente
    getElement() {
        return this.buttonElement;
    }

    // Método para atualizar o texto do botão
    setText(newText) {
        this.buttonElement.textContent = newText;
    }

    // Você pode adicionar mais métodos para mudar estilos, desabilitar, etc.
    disable() {
        this.buttonElement.disabled = true;
    }

    enable() {
        this.buttonElement.disabled = false;
    }
}
export { ButtonComponent }; */

// Como usar (em seu index.js ou script principal)
// const button1 = new ButtonComponent('Enviar Dados', () => console.log('Dados enviados!'));
// document.body.appendChild(button1.getElement());

// const button2 = new ButtonComponent('Cancelar', () => console.warn('Operação cancelada!'), 'cancel-button');
// document.getElementById('footer').appendChild(button2.getElement());
// button2.disable();

//=====================================================================================================================================================================

