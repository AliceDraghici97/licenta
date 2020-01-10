import { Component, OnInit } from '@angular/core';
import { MasinaService } from '../../masina.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'definire_masina.component.html'
})
export class DefinireMasinaComponent {
    constructor(private service: MasinaService) { }

    onClick() {
        if (((<HTMLInputElement>document.getElementById("marca")).value) || ((<HTMLInputElement>document.getElementById("model")).value) ||
            ((<HTMLInputElement>document.getElementById("nrKm")).value)) {
            let marca = (<HTMLInputElement>document.getElementById("marca")).value;
            let model = (<HTMLInputElement>document.getElementById("model")).value;
            let nrKm = parseFloat((<HTMLInputElement>document.getElementById("nrKm")).value);

            let benzina = <HTMLInputElement>document.getElementById("checkbox1");
            let motorina = <HTMLInputElement>document.getElementById("checkbox2");
            let GPL = <HTMLInputElement>document.getElementById("checkbox3");
            let isCheckedBenzina = benzina.checked;
            let isCheckedMotorina = motorina.checked;
            let isCheckedGPL = GPL.checked;
            let carburant = "Undenifed";
            if (isCheckedBenzina) {
                carburant = "Benzina";
            } else if (isCheckedMotorina) {
                carburant = "Motorina";
            } else {
                carburant = "GPL";
            }

            this.service.addMasina(marca, model, nrKm, carburant).subscribe((res) => {
                console.log(res);
            });

            alert("Masina adaugata!");

        } else {
            alert("Completati toate campurile!");
        }
    }

    clear() { (<HTMLFormElement>document.getElementById("formm")).reset(); }

}


