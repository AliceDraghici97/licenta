import { Component } from '@angular/core';
import { ProdusePieChart } from '../../models/ProdusePieChart';
import { ProdusService } from '../../produs.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'calcul_necesar.component.html'
})
export class CalculNecesarComponent {
    produsee: ProdusePieChart[];
    stocCurent: number;
    constructor(private service: ProdusService) { }

    ngOnInit() {

        this.service.get().subscribe((produse) => {
            this.produsee = produse;
            console.log(produse);
        });
    }

    preluare() {
        let select = document.getElementById("numeProdusSELECT") as HTMLSelectElement;
        if (this.produsee) {
            for (var i = 0; i < this.produsee.length; i++) {
                console.log(this.produsee[i].denumire);
                var option = document.createElement("option");
                option.text = this.produsee[i].denumire;
                option.value = this.produsee[i].denumire;
                select.appendChild(option);
            }
            let button = document.getElementById("preluare") as HTMLButtonElement;
            button.disabled = true;
        }
    }
    select() {
        let select = document.getElementById("numeProdusSELECT") as HTMLSelectElement;
        if (this.produsee) {
            // for (var i = 0; i < this.produsee.length; i++) {
            //     console.log(this.produsee[i].denumire);
            //     var option = document.createElement("option");
            //     option.text = this.produsee[i].denumire;
            //     option.value = this.produsee[i].denumire;
            //     select.appendChild(option);
            // }
            let selectedIndex = select.selectedIndex;
            for (var i = 0; i < this.produsee.length; i++) {
                if (selectedIndex == i) {
                    (<HTMLInputElement>document.getElementById("stocCurent")).value = String(this.produsee[i].cantitate);
                    this.stocCurent = this.produsee[i].cantitate;
                }
            }
        }
    }

    onClick() {
        let select = document.getElementById("numeProdusSELECT") as HTMLSelectElement;
        if ((<HTMLInputElement>document.getElementById("stocDorit")).value) {
            const stocDorit = parseFloat((<HTMLInputElement>document.getElementById("stocDorit")).value);
            let value = stocDorit - this.stocCurent;
            alert("Stocul lipsa pentru produsul dorit este " + value);
        }
        else {
            alert("Completati toate campurile!");
        }

    }
}

