import './Spinner.scss';

class Spinner {
    constructor() {
        this.spinner = document.createElement('div');

        this.spinner.className = 'sk-cube-grid';

        this.spinner.innerHTML = `
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
        `;

        return this.spinner;
    }
}

export default Spinner;
