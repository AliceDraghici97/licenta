import { ValueTransformer } from '@angular/compiler/src/util';

export interface Factura {
    id: number,
    nume: string,
    data: string,
    denumire: string,
    unitateMasura: string,
    pret: number,
    cantitateCumparata: number,
    valoare: number
}

