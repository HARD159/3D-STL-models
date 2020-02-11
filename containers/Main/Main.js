import Products from '../../components/Products/Products';
import productsData from '../../assets/data/products.json';
import './Main.scss';

class Main {
    constructor() {
        // create
        this.main = document.createElement('main');

        // styling
        this.main.className = 'Main';

        // append
        this.main.append(new Products(productsData));

        // handlers

        return this.main;
    }
}

export default Main;
