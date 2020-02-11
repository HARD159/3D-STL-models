import Categories from '../../components/Categories/Categories';
import './Sidebar.scss';

class Sidebar {
    constructor() {
        // create
        this.sidebar = document.createElement('aside');

        // styling
        this.sidebar.className = 'Sidebar';

        // append
        this.sidebar.append(new Categories);

        // handlers

        return this.sidebar;
    }
}

export default Sidebar;
