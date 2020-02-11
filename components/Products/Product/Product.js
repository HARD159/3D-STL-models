import Button from '../../UI/Button/Button';
import Basket from '../../UI/Basket/Basket';
import Spinner from '../../UI/Spiner/Spinner';
import './Product.scss';

var requestURL = 'https://www.cbr-xml-daily.ru/daily_json.js';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

var priseValid

request.onload = function() {
    priseValid = request.response;
    console.log(priseValid.Valute.USD.Value);
}

class Product {
    constructor({
        id,
        categoryENG,
        categoryRUS,
        descriptionENG,
        descriptionRUS,
        imageSrc,
        price
    }) {
        // create
        this.product = document.createElement('div');

        let categoryLang;
        let descriptionLang;
        let priseLang;
        let priseIND;
        if ((navigator.language || navigator.userLanguage) == 'ru-RU') {
            categoryLang = categoryRUS;
            descriptionLang = descriptionRUS;
            priseLang = price;
            priseIND = 'RUB';
        } else {
            categoryLang = categoryENG;
            descriptionLang = descriptionENG;
            priseLang = price * 0.016;
            priseIND = 'USD';
        }

        // styling
        this.product.className = 'Product';
        this.product.innerHTML = `
            <div class="ProductImage">
                <img hidden src="${imageSrc}" alt="${id}"></>
            </div>
            <div class='categoryID'>
                <h3>${categoryLang}</h3>
                <h5> # ${id}</h5>
            </div>
            <em>${priseLang} : ${priseIND}</em>
            <p>${ descriptionLang.slice(0, 50) + '...' }</p>
        `;

        this.image = this.product.querySelector('img');

        this.image.addEventListener('load', this.onloadImageHandler.bind(this));

        this.image.after(new Spinner);

        const wrapper = document.createElement("div");
        wrapper.className = 'wrapperButons';

        // append

        if ((navigator.language || navigator.userLanguage) == 'ru-RU') {
            wrapper.append(
                new Button({ 
                    text: 'КУПИТЬ',
                    className: 'ProductDownload' }),
                new Basket({ 
                    text: '',
                    className: 'AddBasket' }),
            );
        } else {
            wrapper.append(
                new Button({ 
                    text: 'PURCHASE',
                    className: 'ProductDownload' }),
                new Basket({ 
                    text: '',
                    className: 'AddBasket' }),
            );
        };
        

        this.product.append(wrapper);

        // handlers
        return this.product;
    }

    onloadImageHandler() {
        setTimeout(() => {
            this.image.hidden = false;
            this.image.nextElementSibling.remove();
        }, 1000);
    }
}

export default Product;