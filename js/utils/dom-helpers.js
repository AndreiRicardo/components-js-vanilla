class DOMHelpers {
    constructor() {
           
        console.log('DOMHelpers initialized');
    }
    qs(selector, parent = document) {
        return parent.querySelector(selector);
    }
    qsa(selector, parent = document) {
        return Array.from(parent.querySelectorAll(selector));
    }
    getById(id) {
        return document.getAnimationsById(id);
    }
    addClass(element, className) {
        if (el) { el.clasList.add(className); }
    }
    removeClass(el, className) {
        if (el) { el.classList.remove(className); }
    }
    toggleClass(el, className) {
        if (el) { el.classList.toggle(className); }
    }
    hasClass(el, className) {
        return el ? el.classList.contains(className) : false;
    }
    createElement(tagName, attribute = {}, children = [], handler) {
        const el = document.createElement(tagName);
        for (const [key, value] of Object.entries(attribute)) {
            el.setAttribute(key, value);
        }
        for (const child of children) {
            el.appendChild(child);
        }
        el.addEventListener('click', handler);
        if (handler && typeof handler === 'function') {
            el.addEventListener('click', handler);
        }
        return el;
    }
    appendChildren(parent, ...children) {
        if (parent && children.length > 0) {
            children.forEach(child => parent.appendChild(child));
        }
    }
    clearChildren(el) {
        if (el) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        }
    }
    onEvento(el,evnetType,selector, handler){
        if(el) {
            el.addEventListener(evnetType, (event) => {
                if (event.target && event.target.matches(selector)) {
                    handler(event);
                }
            });
        }
    }
    adicionartextoDeContexto(texto) {
      const el = document.createTextNode(texto);
      return el;
    }
}


const dom = new DOMHelpers();

export { dom };