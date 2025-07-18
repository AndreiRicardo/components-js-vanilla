export function createButton(text, onclickHandler, className = 'my-custom-button') {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    if (onclickHandler && typeof onclickHandler === 'function') {
        button.addEventListener('click', onclickHandler);
    }
    return button;
}