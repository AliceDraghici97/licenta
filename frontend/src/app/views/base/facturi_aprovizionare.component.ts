import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'facturi_aprovizionare.component.html'
})
export class FacturiAprovizionareComponent {
    constructor() { }
    clear() { (<HTMLFormElement>document.getElementById("formm")).reset(); }

    onClick() {
        if (((<HTMLInputElement>document.getElementById("vat")).value) && ((<HTMLInputElement>document.getElementById("postal-code")).value) &&
            ((<HTMLInputElement>document.getElementById("company")).value) && ((<HTMLInputElement>document.getElementById("vat")).value) &&
            ((<HTMLInputElement>document.getElementById("street")).value) && ((<HTMLInputElement>document.getElementById("city")).value) &&
            ((<HTMLInputElement>document.getElementById("pret")).value) && ((<HTMLInputElement>document.getElementById("country")).value) &&
            ((<HTMLInputElement>document.getElementById("bank")).value) &&
            ((<HTMLInputElement>document.getElementById("contBancar")).value) && ((<HTMLInputElement>document.getElementById("productID")).value) && ((<HTMLInputElement>document.getElementById("um")).value) &&
            ((<HTMLInputElement>document.getElementById("product")).value) &&
            ((<HTMLInputElement>document.getElementById("numeAgent")).value) && ((<HTMLInputElement>document.getElementById("telAgent")).value) && ((<HTMLInputElement>document.getElementById("um")).value)) {

            alert("Factura adaugata!");
        }
        else {
            alert("Completati toate campurile!");
        }
    }
}
