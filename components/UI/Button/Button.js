import './Button.scss';

class Button {
    constructor({type = 'button', text, className, attr}) {
        // create
        this.button = document.createElement('button');

        if (attr) {
            this.button.setAttribute(`data-${attr.name}`, attr.value);
        }

        // styling
        this.button.type = type;
        this.button.textContent = text;
        this.button.className = className
            ? `Button ${className}`
            : 'Button';

        // append

        // handlers

        return this.button;
    }
}

export default Button;