import './Input.scss';

class Input {
    constructor({ type = 'text', placeholder = '' }) {
        // create
        this.input = document.createElement('input');

        // styling
        this.input.className = 'Input';
        this.input.type = type;
        this.input.placeholder = placeholder;

        // append
        this.input.addEventListener('focus', this.onFocusHandler);
        this.input.addEventListener('blur', this.onBlurHandler);

        // handlers

        return this.input;
    }

    onFocusHandler(e) {
        e.target.nextElementSibling.classList.toggle('Active');
    }

    onBlurHandler(e) {
        e.target.nextElementSibling.classList.toggle('Active');
    }
}

export default Input;