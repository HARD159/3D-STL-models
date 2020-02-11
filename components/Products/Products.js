import Product from './Product/Product';
import Categories from '../Categories/Categories';
import Pagination from '../Pagination/Pagination';
import productsData from '../../assets/data/products.json';
import './Products.scss';

class Products {
    constructor(productsData) {
        // create
        this.products = document.createElement('div');

        // styling
        this.products.className = 'Products';
        this.products.innerHTML = '<div class="ProductsWrapper"></div>';

        // append
        Products.render(this.products.firstElementChild);

        // handlers

        return this.products;
    }

    static filter(categoryName, currentPage) {

        const categoryProducts = productsData.filter(products => {
            if ((navigator.language || navigator.userLanguage) == 'ru-RU') {
                return products.categoryRUS === categoryName;
            } else {
                return products.categoryENG === categoryName;
            }
        });

        if (!currentPage) return categoryProducts;

        const start = currentPage * 8 - 8;
        const end = currentPage * 8 -1;

        const filtredProducts = [];

        for (let i = start; i <= end; i++) {
            const product = categoryProducts[i];

            if (!product) break;

            filtredProducts.push(product);
        }

        return {
            filtredProducts,
            totalAmount: categoryProducts.length
        }
    }

    static render(location, firstPage) {
        const productsWrapper = document.querySelector('.ProductsWrapper');

        let where;
        const selectedCategory = Categories.get();
        const currentPage = firstPage ? 1 : Pagination.get();

        const {
            filtredProducts,
            totalAmount
        } = Products.filter(selectedCategory, currentPage);

        if (productsWrapper) {
            where = productsWrapper;
            
            productsWrapper.nextElementSibling.remove();
            productsWrapper.innerHTML = '';

            const products = [];

            for (const productData of filtredProducts) {
                products.push(new Product(productData));
            }

            productsWrapper.append(...products);
        } else {
            where = location;

            for (const productData of filtredProducts) {
                location.append(new Product(productData));
            }
        }

        where.parentElement.append(new Pagination(totalAmount, currentPage));
    }
}

export default Products;