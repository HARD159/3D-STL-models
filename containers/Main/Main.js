import './Main.scss';
import LocationMapISS from '../../components/Location-map-ISS/location-map-ISS';
import CrewISS from '../../components/Crew-ISS/Crew-ISS';

class Main {
    constructor() {
        // create
        this.main = document.createElement('main');

        // styling
        this.main.className = 'Main';

        // append
        this.main.append(
            new LocationMapISS(),
            new CrewISS()
            );

        // handlers

        return this.main;
    }
}

export default Main;
