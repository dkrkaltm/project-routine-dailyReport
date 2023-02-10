"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _skyM, _sourceM, _source, _photoM, _photo, _media, _a;
class Weather {
    constructor() {
        this.URL = '0';
        this.sky = '0';
        this.temp = '0';
        this.name = '0';
    }
    getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;
                resolve('성공');
            }, () => {
                alert('a');
                console.error('에러');
            });
        });
    }
}
const CurrentWeather = new (_a = class extends Weather {
        constructor() {
            super();
            _skyM.set(this, new Map([['맑음', 'ADSXxZ2EjeM'], ['비', 'lQ0fS2meTYQ'], ['흐림', 'lQ0fS2meTYQ'], ['구름', 'lQ0fS2meTYQ'], ['눈', 'WacZouyU_Cs'], ['안개', 'G_BYjnopO6U']]));
            _sourceM.set(this, new Map([['맑음', 'https://www.youtube.com/watch?v=ADSXxZ2EjeM'], ['비', 'https://youtu.be/lQ0fS2meTYQ'], ['흐림', 'https://youtu.be/lQ0fS2meTYQ'], ['구름', 'https://youtu.be/lQ0fS2meTYQ'], ['눈', 'https://youtu.be/WacZouyU_Cs'], ['안개', 'https://youtu.be/WacZouyU_Cs']]));
            _source.set(this, '0');
            _photoM.set(this, new Map([['맑음', 'sunny.png'], ['비', 'rain.png'], ['흐림', 'cloudy.png'], ['구름', 'cloudy.png'], ['눈', 'snow.png'], ['안개', 'fog.png']]));
            _photo.set(this, '0');
            _media.set(this, '0');
        }
        async setData() {
            try {
                await this.getLocation();
                console.log(this.lat, this.lon);
                this.URL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&lang=kr&appid=${this.key}&units=metric`;
                await fetch(this.URL).then(response => response.json())
                    .then(data => {
                    this.sky = data.weather[0].description;
                    this.name = data.name;
                    __classPrivateFieldGet(this, _skyM, "f").forEach((v, k, arr) => {
                        if (this.sky.includes(k)) {
                            __classPrivateFieldSet(this, _media, v, "f");
                            __classPrivateFieldSet(this, _source, __classPrivateFieldGet(this, _sourceM, "f").get(k), "f");
                            __classPrivateFieldSet(this, _photo, __classPrivateFieldGet(this, _photoM, "f").get(k), "f");
                            console.log('weatherData', this.sky, __classPrivateFieldGet(this, _source, "f"));
                        }
                    });
                });
            }
            catch (err) {
                console.error(err);
            }
        }
        getMediaData() {
            return __classPrivateFieldGet(this, _media, "f");
        }
        getSkyData() {
            return this.sky;
        }
        getSourceData() {
            return __classPrivateFieldGet(this, _source, "f");
        }
        getPhotoData() {
            return __classPrivateFieldGet(this, _photo, "f");
        }
    },
    _skyM = new WeakMap(),
    _sourceM = new WeakMap(),
    _source = new WeakMap(),
    _photoM = new WeakMap(),
    _photo = new WeakMap(),
    _media = new WeakMap(),
    _a);
