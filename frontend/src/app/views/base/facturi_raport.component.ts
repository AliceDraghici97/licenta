import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../factura.service';
import { Factura } from '../../models/Factura';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'facturi_raport.component.html'
})
export class FacturiRaportComponent implements OnInit {

    constructor(private service: FacturaService) { }
    facturiF: Factura[];
    total = 0;

    ngOnInit() {
        this.service.get().subscribe((facturi: Factura[]) => {
            this.facturiF = facturi;
        })
    }

    onClick() {
        console.log(this.facturiF);
        if (this.facturiF) {
            for (var i = 0; i < this.facturiF.length; i++) {
                this.total += this.facturiF[i].valoare;
            }
        }
        else {
            console.log("Errorr");
        }
    }
}