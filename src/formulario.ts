//Estructura del contrato para los formularios

class Formulario {
    _name: string;
    _pNumber: number;
    _mail: string;
    _description: string;

    constructor(name:string,
                pNumber: number,
                mail: string,
                description: string) {
                    this._name = name;
                    this._pNumber = pNumber;
                    this._mail = mail;
                    this._description = description;

                }
                get name(){
                    return this._name
                }
                set name(name:string) {
                    this._name = name
                }
                get pNumber(){
                    return this._pNumber
                }
                set pNumber(pNumber:number) {
                    this._pNumber = pNumber
                }
                get mail(){
                    return this._mail
                }
                set mail(mail:string) {
                    this._mail = mail
                }
                get description(){
                    return this._description
                }
                set descriptizon(description:string) {
                    this._description = description
                }

                //Comportamiento
                //function

}