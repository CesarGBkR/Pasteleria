"use strict";
//Estructura del contrato para los formularios
class Formulario {
    constructor(name, pNumber, mail, description) {
        this._name = name;
        this._pNumber = pNumber;
        this._mail = mail;
        this._description = description;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get pNumber() {
        return this._pNumber;
    }
    set pNumber(pNumber) {
        this._pNumber = pNumber;
    }
    get mail() {
        return this._mail;
    }
    set mail(mail) {
        this._mail = mail;
    }
    get description() {
        return this._description;
    }
    set descriptizon(description) {
        this._description = description;
    }
}
