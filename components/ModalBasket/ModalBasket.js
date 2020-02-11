import './ModalBasket.scss';

class ModalBasket {
    constructor() {
        // create
        this.modalbasket = document.createElement('div');
        
        // styling
        this.modalbasket.className = 'ModalBasket';
        const basketState = document.createElement('h1');

        this.modalbasket.className = 'ModalBasket';
        basketState.textContent = 'Basket clear';

        // append
        this.modalbasket.append(basketState);

        // handlers

        return this.modalbasket;
    }
}

export default ModalBasket;