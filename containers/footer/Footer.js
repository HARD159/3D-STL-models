import './Footer.scss';

class Footer {
    constructor() {
        // create
        this.footer = document.createElement('footer');
        const date = new Date().getFullYear();
        // styling

        let footerTextLang;
        if ((navigator.language || navigator.userLanguage) == 'ru-RU') {
            footerTextLang = 'Все права защищены';
        } else {
            footerTextLang= 'All Rights Reserved';
        }

        this.footer.className = 'Footer';
        this.footer.innerHTML = `
            <strong>${footerTextLang} ${date}</strong>
        `;

        // append

        // handlers

        return this.footer;
    }
}

export default Footer;
