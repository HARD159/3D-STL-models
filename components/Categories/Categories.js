import './Categories.scss';
import Button from '../UI/Button/Button';
import Products from '../Products/Products'
import productsData from '../../assets/data/products.json';

class Categories {
    constructor() {
        // create
        this.categories = document.createElement('div');

        const buttons = [];
        const categoryUnique = [];

        if ((navigator.language || navigator.userLanguage) == 'ru-RU') {
            for (let i = 0; i < productsData.length; i++) {
                categoryUnique.push(productsData[i].categoryRUS);
              }
        } else {
            for (let i = 0; i < productsData.length; i++) {
                categoryUnique.push(productsData[i].categoryENG);
              };
        }

        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        
        let unique = categoryUnique.filter( onlyUnique );

        unique.sort();

        for (let i = 0; i < unique.length; i++) {
                buttons.push(new Button({ text: unique[i],
                className: !i ? 'categoryButtons Selected': 'categoryButtons',
                attr: { name: 'category', value: unique[i] }
            }));
        }

        // styling
        this.categories.className = 'Categories';

        // append
        this.categories.append(...buttons);

        // handlers
        this.categories.addEventListener(
            'click', this.onClickHandler.bind(this)
        );

        return this.categories;
    }

    static get() {
        const category = document.querySelector('.categoryButtons.Selected');

        const firstCategory = [];

        if ((navigator.language || navigator.userLanguage) == 'ru-RU') {
            for (let i = 0; i < productsData.length; i++) {
                firstCategory.push(productsData[i].categoryRUS);
              }
        } else {
            for (let i = 0; i < productsData.length; i++) {
                firstCategory.push(productsData[i].categoryENG);
              };
        }

        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        
        let unique = firstCategory.filter( onlyUnique );

        unique.sort();

        return category ? category.dataset.category : unique[0];
    }

    onClickHandler(e) {
        const button = e.target;
        if (button.tagName !== 'BUTTON') return;

        for (const btn of this.categories.children) {
            if (btn.classList.contains('Selected')) {
                btn.classList.remove('Selected');
            }
        }

        button.classList.add('Selected');

        Products.render(null, true);
    }
}

export default Categories;