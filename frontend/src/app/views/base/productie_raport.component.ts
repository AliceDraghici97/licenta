import { Component, OnDestroy } from '@angular/core';
import { ProdusePieChart } from '../../models/ProdusePieChart';
import { ProdusService } from '../../produs.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'productie_raport.component.html'
})
export class ProductieRaportComponent implements OnDestroy {
    max: number = 1000;
    showWarning: boolean;
    dynamic: number;
    type: string;
    timer: any = null;
    produsee: ProdusePieChart[];
    stocCurent: number;

    constructor(private service: ProdusService) { }

    ngOnInit() {
        this.service.get().subscribe((produse) => {
            this.produsee = produse;
            console.log(produse);
        });
    }

    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    random(): void {
        this.select();
        let value = Math.floor(this.stocCurent / 10 + 1);
        let type: string;

        if (value < 250) {
            type = 'Productie slaba';
        } else if (value < 500) {
            type = 'Productie medie';
        } else if (value < 750) {
            type = 'Productie buna';
        } else {
            type = 'Productie excelenta';
        }
        this.dynamic = value;
        this.type = type;
        this.showWarning = type === 'vanzari slabe' || type == 'vanzari medii';
        this.dynamic = value;
        this.type = type;
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
            let selectedIndex = select.selectedIndex;
            for (var i = 0; i < this.produsee.length; i++) {
                if (selectedIndex == i) {
                    this.stocCurent = this.produsee[i].cantitate;
                }
            }
        }
    }
}