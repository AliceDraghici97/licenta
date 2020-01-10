import { Component } from '@angular/core';
import { PartenerService } from '../../partener.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'parteneri_definire.component.html'
})
export class ParteneriDefinireComponent {
    constructor(private service: PartenerService) { }

    clear() { (<HTMLFormElement>document.getElementById("formm")).reset(); }

    onClick() {
        // if (((<HTMLInputElement>document.getElementById("nume")).value) &&
        //     ((<HTMLInputElement>document.getElementById("adresa")).value) &&
        //     ((<HTMLInputElement>document.getElementById("postal-code")).value) &&
        //     ((<HTMLInputElement>document.getElementById("cui")).value) &&
        //     ((<HTMLInputElement>document.getElementById("telAgent")).value) &&
        //     ((<HTMLInputElement>document.getElementById("email-input")).value) &&
        //     ((<HTMLInputElement>document.getElementById("country")).value) &&
        //     ((<HTMLInputElement>document.getElementById("bank")).value) &&
        //     ((<HTMLInputElement>document.getElementById("contBancar")).value)) {

        let nume = (<HTMLInputElement>document.getElementById("nume")).value;
        let email = (<HTMLInputElement>document.getElementById("email-input")).value;
        let cui = (<HTMLInputElement>document.getElementById("cui")).value;
        let cuii = "RO19762712"
        let tip = "Nedeclarat";
        let telefon = (<HTMLInputElement>document.getElementById("telAgent")).value;
        let strada = (<HTMLInputElement>document.getElementById("adresa")).value;
        let numar = 3;
        let judet = "Sector2";
        let oras = "Bucuresti";
        let apartament = "32";
        let bloc = "P3";
        let scara = '';
        let tara = "Romania";
        let client = <HTMLInputElement>document.getElementById("checkbox2");
        let furnizor = <HTMLInputElement>document.getElementById("checkbox1");
        let isCheckedC = client.checked;
        let isCheckedF = furnizor.checked;
        if (isCheckedC) {
            tip = "Client";
        } else if (isCheckedF) {
            tip = "Furnizor";
        }
        console.log(tip);
        if (nume && email && cui && tip && telefon && strada && numar && judet && tara) {
            this.service.addPartener(nume, email, cuii, "Client", telefon).subscribe((res) => {
                console.log(res);
            });

            this.service.addAdresa(strada, numar, judet, oras, tara, apartament, scara, bloc).subscribe((res) => {
                console.log(res);
            });

            alert("Partener adaugat!");
        }
        else {
            alert("Completati toate campurile!");
        }
    }

}
