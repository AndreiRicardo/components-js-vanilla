/* export function createButton(text, onclickHandler, className = 'my-custom-button') {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    if (onclickHandler && typeof onclickHandler === 'function') {
        button.addEventListener('click', onclickHandler);
    }
    return button;
} */

// ====================================================================================================================================================================
    // ButtonComponent.js
class ButtonComponent {
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
export { ButtonComponent };

// Como usar (em seu index.js ou script principal)
// const button1 = new ButtonComponent('Enviar Dados', () => console.log('Dados enviados!'));
// document.body.appendChild(button1.getElement());

// const button2 = new ButtonComponent('Cancelar', () => console.warn('Operação cancelada!'), 'cancel-button');
// document.getElementById('footer').appendChild(button2.getElement());
// button2.disable();

//=====================================================================================================================================================================

/* class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
        button {
            padding: 10px 20px;
            background-color: var(--button-bg, #007bff);
            color: var(--button-color, #fff);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 30px
        }
        button:hover {
            background-color: var(--button-hover-bg, #0056b3);
            color: var(--button-hover-color, #fff);
        }
        </style>
        <button><slot></slot></button>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.button = this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('buttonClick', {
                detail: this.textContent || this.getAttribute('text') || 'botâo Clicado',
                bubbles: true,
                composed: true
            }));
        });
    }
    static get observedAttributes() {
        return ['text'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        const button = this.shadowRoot.querySelector('button');
        if (!button) return;
        if (name === 'text') {
            button.textContent = newValue;
            while (this.shadownRoot.querySelector('slot').firstChild) {
                this.shadowRoot.querySelector('slot').removeChild(this.shadowRoot.querySelector('slot').firstChild);
            }
        } else if (name === 'disabled') {
            button.disabled = this.hasAttribute('disabled');
        }
    }

    connectedCallback() {
        const button = this.shadowRoot.querySelector('button');
        if (!button) return;
        button.textContent = this.getAttribute('text') || 'Default Button';
        button.disabled = this.hasAttribute('disabled');
    }
    
    setText(newText) {
        this.setAttribute('text', newText);
    }
    disable() {
        this.setAttribute('disabled', '');
    }
    enable() {
        this.removeAttribute('disabled');
    }
}

customElements.define('my-button', MyButton); */

