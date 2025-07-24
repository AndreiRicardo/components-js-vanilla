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
        return document.getElementById(id);
    }

    addClass(element, className) {
        if (element) { element.classList.add(className); }
    }

    removeClass(element, className) {
        if (element) { element.classList.remove(className); }
    }

    toggleClass(element, className) {
        if (element) { element.classList.toggle(className); }
    }

    hasClass(element, className) {
        return element ? element.classList.contains(className) : false;
    }

    createElement(tagName, attributes = {}, children = [], handler) {
        const el = document.createElement(tagName);
        for (const [key, value] of Object.entries(attributes)) {
            el.setAttribute(key, value);
        }
        for (const child of children) {
            el.appendChild(child);
        }
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

    clearChildren(element) {
        if (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }

    onEvent(element, eventType, selector, handler) {
        if (element) {
            element.addEventListener(eventType, (event) => {
                if (event.target && event.target.matches(selector)) {
                    handler(event);
                }
            });
        }
    }

    createTextNode(text) {
        return document.createTextNode(text);
    }
}

const dom = new DOMHelpers();
export { dom };