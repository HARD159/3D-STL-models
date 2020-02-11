import './Basket.scss';

class Basket {
    constructor() {
        // create
        this.basket = document.createElement('Button');

        // styling
        this.basket.className = 'Basket';
        this.basket.innerHTML = '<i class="fas fa-shopping-cart"></i>';

        // append

        // handlers

        return this.basket;
    }
}

export default Basket;