import './Header.scss';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import Basket from '../../components/UI/Basket/Basket';
import Modal from '../../components/ModalBasket/ModalBasket';

class Header {
    constructor() {
        // create
        this.header = document.createElement('header');

        // styling
        this.header.className = 'Header';
        this.header.innerHTML = '<div class="HeaderWrapper"></div>';

        var userLang = navigator.language || navigator.userLanguage;
        console.log(userLang);

        let SearchLang;
        if ((navigator.language || navigator.userLanguage) == 'ru-RU') {
            SearchLang = 'Поиск...';
        } else {
            SearchLang = 'Search...';
        }

        // append
        this.header.firstElementChild.append(
            new Logo('3D STL Model'),
            new Search(SearchLang),
            new Basket({ text: '', className: 'Alternative'})
        );

        this.header.addEventListener('click', this.toggleModalHandler);

        // handlers

        return this.header;
    }

    toggleModalHandler(e) {
        if (e.target.tagName !== 'BUTTON' && e.target.className !== 'fas fa-shopping-cart') return;

        document.getElementById('root').append(new Modal);
    }
}

export default Header;
