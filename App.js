import Header from './containers/Header/Header';
//import Sidebar from './containers/Sidebar/Sidebar';
import Main from './containers/Main/Main';
import './App.scss';

class App {
    constructor() {
        this.app = document.createElement('div');

        this.app.className = 'App';

        this.app.append(new Header, new Main);

        return this.app;
    }
}

export default App;