import './Location-data-ISS.scss';

class LocationDataISS {
    constructor() {
        // create
        this.locationDataISS = document.createElement('div');

        const request = new XMLHttpRequest();
        request.open('GET', 'http://api.open-notify.org/iss-now.json', false);
        request.send();

        let posipionISS = JSON.parse(request.response);

        // styling
        this.locationDataISS.className = 'Location-data-ISS';
        this.locationDataISS.innerHTML = `
        <h1> ISS is now located at:</h1>
        <p>longitude:${posipionISS.iss_position.longitude} latitude:${posipionISS.iss_position.latitude}</p>
        `
        setInterval(() => 
        console.log(request.response),
        request.send(), 2000);
        
        // append
        this.locationDataISS.append()
        // this.locationDataISS.append();

        // handlers
        return this.locationDataISS;
    }
}

export default LocationDataISS;