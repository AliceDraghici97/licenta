import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { FacturaService } from '../../factura.service';
import { FacturaVanzare } from '../../models/FacturaVanzare';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'facturi_vanzare.component.html'
})
export class FacturiVanzareComponent {

    facturaVanzare: FacturaVanzare = {
        denumireClient: '',
        CUIClient: '',
        stradaClient: '',
        orasClient: '',
        codPostalClient: '',
        taraClient: '',
        bancaClient: '',
        contBancarClient: '',
        codProdus: null,
        denumireProdus: '',
        cantitateProdus: null,
        unitMasuraProdus: null,
        pretTotalProdus: null,
        dataFactura: null,
        numeAgent: '',
        telefonAgent: ''
    }

    constructor(private service: FacturaService) { }
    isCollapsed: boolean = false;
    iconCollapse: string = 'icon-arrow-up';

    collapsed(event: any): void {
        // console.log(event);
    }

    expanded(event: any): void {
        // console.log(event);
    }

    toggleCollapse(): void {
        this.isCollapsed = !this.isCollapsed;
        this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
    }

    clear() { (<HTMLFormElement>document.getElementById("formm")).reset(); }

    onClick() {
        if (((<HTMLInputElement>document.getElementById("productID")).value) && ((<HTMLInputElement>document.getElementById("cantitate")).value) &&
            ((<HTMLInputElement>document.getElementById("company")).value) && ((<HTMLInputElement>document.getElementById("cui")).value) &&
            ((<HTMLInputElement>document.getElementById("str")).value) && ((<HTMLInputElement>document.getElementById("city")).value) &&
            ((<HTMLInputElement>document.getElementById("codP")).value) && ((<HTMLInputElement>document.getElementById("country")).value) &&
            ((<HTMLInputElement>document.getElementById("bank")).value) &&
            ((<HTMLInputElement>document.getElementById("contBancar")).value) && ((<HTMLInputElement>document.getElementById("productID")).value) && ((<HTMLInputElement>document.getElementById("city")).value) &&
            ((<HTMLInputElement>document.getElementById("productName")).value)) {

            let data = new Date(((<HTMLDataElement>document.getElementById("date-input")).value));
            var date;
            date = new Date();
            date = data.getUTCFullYear() + '-' +
                ('00' + (data.getUTCMonth() + 1)).slice(-2) + '-' +
                ('00' + data.getUTCDate()).slice(-2) + ' ' +
                ('00' + data.getUTCHours()).slice(-2) + ':' +
                ('00' + data.getUTCMinutes()).slice(-2) + ':' +
                ('00' + data.getUTCSeconds()).slice(-2);
            // let datta = day + "/" + month + "/" + year;
            let cantitate = (<HTMLInputElement>document.getElementById("cantitate")).value;
            let pret = parseFloat((<HTMLInputElement>document.getElementById("pret")).value);

            let idPartener = 2;
            let fk_idProdus = parseInt((<HTMLInputElement>document.getElementById("productID")).value);
            let metodaPlata;

            let element = (document.getElementById("select1")) as HTMLSelectElement;
            let selectedIndex = element.selectedIndex;
            if (selectedIndex == 1) {
                metodaPlata = "Cash";
            } else if (selectedIndex == 2) {
                metodaPlata = "Card";
            } else {
                metodaPlata = "Ordin de Plata";
            }

            let r0 = <HTMLInputElement>document.getElementById("radio0");
            let r1 = <HTMLInputElement>document.getElementById("radio1");
            let r2 = <HTMLInputElement>document.getElementById("radio2");
            let r3 = <HTMLInputElement>document.getElementById("radio3");
            let isChecked1 = r1.checked;
            let isChecked2 = r2.checked;
            let isChecked3 = r3.checked;
            if (isChecked1) {
                pret = pret - pret * 30 / 100;
            } else if (r0.checked) {
                pret = pret;
            } else if (isChecked2) {
                pret = pret - pret * 50 / 100;
            } else {
                pret = pret - pret * 70 / 100;
            }

            this.service.addFactura(date, cantitate, pret, metodaPlata, idPartener, fk_idProdus).subscribe((res) => {
                console.log(res);
            });

            alert("Factura adaugata!");
        }
        else {
            alert("Completati toate campurile!");
        }
    }

}