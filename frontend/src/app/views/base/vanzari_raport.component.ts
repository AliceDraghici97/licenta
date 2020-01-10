import { Component, OnDestroy, OnInit } from '@angular/core';
import { FacturaService } from '../../factura.service';
import { Factura } from '../../models/Factura';
import { FacturaRaportProgres } from '../../models/FacturaRaportProgres';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'vanzari_raport.component.html'
})
export class VanzariRaportComponent implements OnDestroy {
    max: number = 1000;
    showWarning: boolean;
    dynamic: number;
    type: string;
    timer: any = null;

    constructor(private service: FacturaService) { }
    facturiF: FacturaRaportProgres[];
    total: number;

    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    random(): void {
        let value = Math.floor(this.total / 10);
        let type: string;

        if (value < 250) {
            type = 'vanzari slabe';
        } else if (value < 500) {
            type = 'vanzari medii';
        } else if (value < 750) {
            type = 'vanzari bune';
        } else {
            type = 'vanzari excelente';
        }
        this.dynamic = value;
        this.type = type;
        this.showWarning = type === 'vanzari slabe' || type == 'vanzari medii';
        this.dynamic = value;
        this.type = type;
    }

    preluareFacturi() {
        var element = document.getElementById("an") as HTMLSelectElement;
        var an = parseInt(element.options[element.selectedIndex].value);

        this.service.getYear(an).subscribe((valori: FacturaRaportProgres[]) => {
            this.facturiF = valori;
        })
        this.total = 0;
    }

    onClick() {
        this.preluareFacturi();
        console.log(this.facturiF);
        console.log("TOTAL:" + this.total);

        if (this.facturiF) {
            for (var i = 0; i < this.facturiF.length; i++) {
                this.total += this.facturiF[i].valoare;
                console.log("Valoare: " + (this.facturiF[i].valoare));
            }
        }
        else {
            console.log("Errorr");
        }
        console.log("TOTAL:" + this.total);
        this.random();
    }
}

