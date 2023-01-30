class Weather {
    URL;
    lat;
    lon;
    sky;
    temp;
    name;
    constructor() {
    }
    getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;
                resolve('성공');
            }, () => { console.error('에러'); });
        });
    }
}
const CurrentWeather = new class extends Weather {
    #skyM = new Map([['맑음', 'ADSXxZ2EjeM'], ['비', 'lQ0fS2meTYQ'], ['흐림', 'lQ0fS2meTYQ'], ['눈', 'WacZouyU_Cs'], ['안개', 'G_BYjnopO6U']]);
    #sourceM = new Map([['맑음', 'https://www.youtube.com/watch?v=ADSXxZ2EjeM'], ['비', 'https://youtu.be/lQ0fS2meTYQ'], ['구름', 'https://youtu.be/lQ0fS2meTYQ'], ['눈', 'https://youtu.be/WacZouyU_Cs'], ['안개', 'https://youtu.be/WacZouyU_Cs']]);
    #source;
    #media = '0';
    constructor() {
        super();
        this.setData();
    }
    async setData() {
        try {
            await this.getLocation();
            this.URL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&lang=kr&appid=897fc4ef9ea1ad8e839d8b2fa792b91c&units=metric`;
            await fetch(this.URL).then(response => response.json())
                .then(data => {
                this.sky = data.weather[0].description;
                this.name = data.name;
                this.#skyM.forEach((v, k, arr) => {
                    if (this.sky.includes(k)) {
                        this.#media = v;
                        this.#source = this.#sourceM.get(k);
                    }
                });
            });
        }
        catch (err) {
            console.error(err);
        }
    }
    getMediaData() {
        return this.#media;
    }
    getSkyData() {
        return this.sky;
    }
    getSourceData() {
        return this.#source;
    }
};
//# sourceMappingURL=weather.js.map