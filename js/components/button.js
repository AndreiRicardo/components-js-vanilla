function createButton(text, onclickHandler, className = 'my-custom-button') {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    if (typeof onclickHandler !== 'function') {
        throw new Error('onclickHandler must be a function');
    }
    return button;
}
const _createButton = createButton;
export { _createButton as createButton };