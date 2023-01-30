const Time = new class {
    #Edate = document.querySelector('#time-date');
    #Ehour = document.querySelector('#time-hour');
    #date = new Intl.DateTimeFormat('ko', {
        dateStyle: 'short',
    }).format(new Date());
    #WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    #hour = 0;
    #minute = 0;
    #second = 0;
    #arr;
    constructor() {
        this.#Edate.innerHTML = `${this.#date} ${this.#WEEKDAY[new Date().getDay()]}`;
        setInterval(() => {
            this.#hour = new Date().getHours();
            this.#minute = new Date().getMinutes();
            this.#second = new Date().getSeconds();
            this.#arr = [this.#hour, this.#minute, this.#second].map((v, i, arr) => {
                if (v < 10) {
                    arr[i] = '0' + String(v);
                }
                return arr[i];
            });
            this.#Ehour.innerHTML = this.#arr.join(':');
        }, 1000);
    }
    setEhour(value) {
        this.#Ehour.innerHTML = value;
    }
};
//# sourceMappingURL=time.js.map