import { Component } from '@angular/core';
import { ProdusService } from '../../produs.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'definire_articole.component.html'
})
export class DefinireArticoleComponent {
    constructor(private service: ProdusService) { }

    onClick() {
        let nume = (<HTMLInputElement>document.getElementById("denumire")).value;
        let compozitie = (<HTMLInputElement>document.getElementById("compozitie")).value;
        let pret = parseFloat((<HTMLInputElement>document.getElementById("pret")).value);
        let cantitate = parseFloat((<HTMLInputElement>document.getElementById("cantitate")).value);
        let unitate = (<HTMLInputElement>document.getElementById("unit")).value;
        console.log(nume, pret, compozitie, cantitate, unitate);
        if ((<HTMLInputElement>document.getElementById("denumire")).value && (<HTMLInputElement>document.getElementById("compozitie")).value &&
            (<HTMLInputElement>document.getElementById("pret")).value &&
            (<HTMLInputElement>document.getElementById("cantitate")).value &&
            (<HTMLInputElement>document.getElementById("unit")).value) {

            this.service.addProdus(nume, pret, cantitate, compozitie, unitate).subscribe((res) => {
                console.log(res);
            });

            alert("Produs adaugat!");

        } else {
            alert("Completati toate campurile!");
        }
    }

    clear() { (<HTMLFormElement>document.getElementById("formm")).reset(); }
}
