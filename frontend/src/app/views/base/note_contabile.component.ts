import { Component } from '@angular/core';
export interface ContContabil {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: 'note_contabile.component.html'
})
export class NoteContabileComponent {
    constructor() { }
    conturi: ContContabil[] = [
        { value: 'debitor', viewValue: 'Debitor' },
        { value: 'creditor', viewValue: 'Creditor' }
    ]

    onClick() {
        if (((<HTMLInputElement>document.getElementById("explicatii")).value) && ((<HTMLInputElement>document.getElementById("vat")).value) &&
            ((<HTMLInputElement>document.getElementById("datet")).value) && ((<HTMLInputElement>document.getElementById("numeAgent")).value) &&
            ((<HTMLInputElement>document.getElementById("telAgent")).value)) {

            alert("Nota adaugata!");
        }
        else {
            alert("Completati toate campurile!");
        }
    }
    clear() { (<HTMLFormElement>document.getElementById("formm")).reset(); }

}
