import { Component } from '@angular/core';
import { AngajatService } from '../../angajat.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'definire_agent.component.html'
})
export class DefinireAgentComponent {
    constructor(private service: AngajatService) { }

    onClick() {
        let nume = (<HTMLInputElement>document.getElementById("nume")).value;
        let prenume = (<HTMLInputElement>document.getElementById("prenume")).value;
        let cnp = (<HTMLInputElement>document.getElementById("cnp")).value;
        let adresa = (<HTMLInputElement>document.getElementById("adresa")).value;
        let codPostal = (<HTMLInputElement>document.getElementById("postal-code")).value;
        let country = (<HTMLInputElement>document.getElementById("country")).value;
        let functie = (<HTMLInputElement>document.getElementById("functie")).value;
        let telefon = (<HTMLInputElement>document.getElementById("telAgent")).value;
        let email = (<HTMLInputElement>document.getElementById("email-input")).value;
        if (nume && prenume && cnp && adresa && codPostal && country && functie && telefon && email) {
            this.service.addAgent(nume, prenume, functie, "00/00/0000", email, telefon, 1, null, "angajat123").subscribe((res) => {
                console.log(res);
            });
            alert("Masina adaugata!");
        } else {
            alert("Completati toate campurile!");
        }
    }

    clear() { (<HTMLFormElement>document.getElementById("formm")).reset(); }

}
