import internal from "stream";
import Address from "./Address";
import Timezone from "./Timezone";
import Currency from "./Currency";
import ConnectionData from "./ConnectionData";

export default class CallerData {

    private _ip: string;
    private _date: Date;
    private _address: Address;
    private _longitude: number
    private _latitude: number;
    private _timeZone: Timezone;
    private _currency: Currency;
    private _connectionData: ConnectionData;

    constructor(ip: string, date: Date, address: Address, longitude: number, latitude: number, timeZone: Timezone, currency: Currency, connectionData: ConnectionData) {
        this._ip = ip;
        this._date = date;
        this._address = address;
        this._longitude = longitude;
        this._latitude = latitude;
        this._timeZone = timeZone;
        this._currency = currency;
        this._connectionData = connectionData;
    }

    get ip(): string {
        return this._ip;
    }

    set ip(value: string) {
        this._ip = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get address(): Address {
        return this._address;
    }

    set address(value: Address) {
        this._address = value;
    }

    get longitude(): number {
        return this._longitude;
    }

    set longitude(value: number) {
        this._longitude = value;
    }

    get latitude(): number {
        return this._latitude;
    }

    set latitude(value: number) {
        this._latitude = value;
    }

    get timeZone(): Timezone {
        return this._timeZone;
    }

    set timeZone(value: Timezone) {
        this._timeZone = value;
    }

    get currency(): Currency {
        return this._currency;
    }

    set currency(value: Currency) {
        this._currency = value;
    }

    get connectionData(): ConnectionData {
        return this._connectionData;
    }

    set connectionData(value: ConnectionData) {
        this._connectionData = value;
    }
}

