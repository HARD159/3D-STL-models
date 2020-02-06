import './Header.scss';
import LocationDataISS from '../../components/Location-data-ISS/location-data-ISS';
import TimeUTS from '../../components/Time-UTS/Time-UTS';

class Header {
    constructor() {
        // create
        this.header = document.createElement('header');

        // styling
        this.header.className = 'Header';

        this.header.append(
            new LocationDataISS(),
            new TimeUTS()
        );

        // append
        this.header.firstElementChild.append(
            
        );

        // handlers
        return this.header;
    }
}

export default Header;
