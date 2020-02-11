import Button from '../UI/Button/Button';
import Products from '../../components/Products/Products';
import './Pagination.scss';

class Pagination {
    constructor(totalAmount, currentPage) {
        this.pagination = document.createElement('div');

        this.pagination.className = 'Pagination';

        const amount = totalAmount / 8;

        for (let i = 0; i < amount; i++) {
            const options = {
                text: i + 1,
                className: i === currentPage - 1 
                    ? 'PaginationButton Selected' 
                    : 'PaginationButton',
                attr: {
                    name: 'pagination',
                    value: i + 1
                }
            };

            this.pagination.append(new Button(options));
        }

        this.pagination.addEventListener(
            'click',
            this.onClickHandler.bind(this)
        );

        return this.pagination;
    }

    static get() {
        const paginationButton = document.querySelector('.PaginationButton.Selected');

        return paginationButton ? paginationButton.dataset.pagination: 1;
    }

    onClickHandler(e) {
        const button = e.target;

        if (button.tagName !== 'BUTTON') return;

        for (const btn of this.pagination.children) {
            if (btn.classList.contains('Selected')) {
                btn.classList.remove('Selected');
            }
        }

        button.classList.add('Selected');

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        let timerId = setInterval(() => {
            if ( scrollTop > 0) {window.scrollTo(pageXOffset, scrollTop -= 50) }
            else { clearInterval(timerId) }
        }, 10);
        
        Products.render();
    }
}

export default Pagination;