import logoSrc from '../../assets/images/logo.png';
import './Logo.scss';

class Logo {
    constructor(title) {
        // create
        this.logo = document.createElement('div');
        const image = new Image();
        const logoTitle = document.createElement('div');

        // styling
        this.logo.className = 'Logo';
        this.logo.innerHTML = '<div class="ImageWrapper"></div>';
        image.src = logoSrc;

        logoTitle.innerHTML = `
            <h1 class='LogoTitle' translate="no">${title}</h1>
        `;

        // append
        this.logo.firstElementChild.append(image);
        this.logo.append(logoTitle);

        // handlers

        return this.logo;
    }
}

export default Logo;