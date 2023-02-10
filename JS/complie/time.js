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
var _Edate, _Ehour, _date, _WEEKDAY, _hour, _minute, _second, _arr, _a;
const Time = new (_a = class {
        constructor() {
            _Edate.set(this, document.querySelector('#time-date'));
            _Ehour.set(this, document.querySelector('#time-hour'));
            _date.set(this, new Intl.DateTimeFormat('ko', {
                dateStyle: 'short',
            }).format(new Date()));
            _WEEKDAY.set(this, ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']);
            _hour.set(this, 0);
            _minute.set(this, 0);
            _second.set(this, 0);
            _arr.set(this, []);
            __classPrivateFieldGet(this, _Edate, "f").innerHTML = `${__classPrivateFieldGet(this, _date, "f")} ${__classPrivateFieldGet(this, _WEEKDAY, "f")[new Date().getDay()]}`;
            setInterval(() => {
                __classPrivateFieldSet(this, _hour, new Date().getHours(), "f");
                __classPrivateFieldSet(this, _minute, new Date().getMinutes(), "f");
                __classPrivateFieldSet(this, _second, new Date().getSeconds(), "f");
                __classPrivateFieldSet(this, _arr, [__classPrivateFieldGet(this, _hour, "f"), __classPrivateFieldGet(this, _minute, "f"), __classPrivateFieldGet(this, _second, "f")].map((v, i, arr) => {
                    if (v < 10) {
                        arr[i] = '0' + String(v);
                    }
                    return arr[i];
                }), "f");
                __classPrivateFieldGet(this, _Ehour, "f").innerHTML = __classPrivateFieldGet(this, _arr, "f").join(':');
            }, 1000);
        }
        setEhour(value) {
            __classPrivateFieldGet(this, _Ehour, "f").innerHTML = value;
        }
    },
    _Edate = new WeakMap(),
    _Ehour = new WeakMap(),
    _date = new WeakMap(),
    _WEEKDAY = new WeakMap(),
    _hour = new WeakMap(),
    _minute = new WeakMap(),
    _second = new WeakMap(),
    _arr = new WeakMap(),
    _a);
