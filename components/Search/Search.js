import Input from '../UI/Input/Input';
import './Search.scss';

class Search {
    constructor(searchPlaceholder) {
        // create
        this.search = document.createElement('div');

        // styling
        this.search.className = 'Search';
        this.search.innerHTML = '<i class="fas fa-search"></i>';

        // append
        this.search.prepend(new Input({ 
            placeholder: searchPlaceholder 
        }));

        // handlers

        return this.search;
    }
}

export default Search;