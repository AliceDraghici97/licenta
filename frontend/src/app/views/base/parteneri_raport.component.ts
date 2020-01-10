import { Component } from '@angular/core';
import { PartenerService } from '../../partener.service';
import { Partener } from '../../models/Partener';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'parteneri_raport.component.html'
})
export class ParteneriRaportComponent {
    constructor(private service: PartenerService) { }
    partenerii: Partener[];

    onClick() {
        var element = document.getElementById("tip") as HTMLSelectElement;
        var tip = (element.options[element.selectedIndex].value);
        console.log(tip);

        this.service.getPartneri(tip).subscribe((valori) => {
            this.partenerii = valori;
        })
    }
}



