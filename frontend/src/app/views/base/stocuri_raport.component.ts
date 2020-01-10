import { Component, OnInit } from '@angular/core';
import { ProdusService } from '../../produs.service';
import { ProdusePieChart } from '../../models/ProdusePieChart';
import { ColorsComponent } from '../theme/colors.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'stocuri_raport.component.html',
})

export class StocuriRaportComponent implements OnInit {
    public pieChartLabels: string[] = new Array(); //= ['Canistre', 'Dopuri Rosii', 'Recipient 150ml', 'Inchizatori Mici', "sadac"];
    public pieChartData: number[] = new Array();//= [1200, 900, 1050, 1000, 900];
    public pieChartType = 'pie';
    isData = false;
    public chartColors: Array<any> = [
        { // all  in order
            backgroundColor: ['#73C6B6', '#76D7C4', '#85C1E9', '#1ABC9C', '#3498DB', '#2874A6']
        }
    ]
    produsee: ProdusePieChart[];

    constructor(private service: ProdusService) {
        this.service.get().subscribe((produse) => {
            this.produsee = produse;
        });
        if (this.produsee) {
            for (var i = 0; i < this.produsee.length; i++) {
                console.log(this.produsee[i].denumire);
                console.log(this.produsee[i].cantitate);
                this.pieChartLabels[i] = this.produsee[i].denumire;
                this.pieChartData[i] = this.produsee[i].cantitate;
            }
            console.log(this.pieChartLabels);
            console.log(this.pieChartData);
        }
        else {
            console.log("Errorr");
        }
    }

    ngOnInit() {
        if (this.produsee) {
            for (var i = 0; i < this.produsee.length; i++) {
                console.log(this.produsee[i].denumire);
                console.log(this.produsee[i].cantitate);
                this.pieChartLabels[i] = this.produsee[i].denumire;
                this.pieChartData[i] = this.produsee[i].cantitate;
            }
            console.log(this.pieChartLabels);
            console.log(this.pieChartData);
        }
        else {
            console.log("Errorr");
        }
    }

    onClick() {
        if (this.produsee) {
            for (var i = 0; i < this.produsee.length; i++) {
                console.log(this.produsee[i].denumire);
                console.log(this.produsee[i].cantitate);
                this.pieChartLabels[i] = this.produsee[i].denumire;
                this.pieChartData[i] = this.produsee[i].cantitate;
            }
            console.log(this.pieChartLabels);
            console.log(this.pieChartData);
            this.isData=true;
        }
        else {
            console.log("Errorr");
        }
    }
}

