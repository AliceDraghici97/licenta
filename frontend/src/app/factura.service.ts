import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.uri}/facturi`);
  }

  getYear(year: number) {
    return this.http.get(`${this.uri}/facturi/${year}`);
  }

  addFactura(data, cantitateCumparata, valoare, metodaPlata, fk_idPartener, fk_idProdus) {
    const factura = {
      data: data,
      cantitateCumparata: cantitateCumparata,
      valoare: valoare,
      metodaPlata: metodaPlata,
      fk_idPartener: fk_idPartener,
      fk_idProdus: fk_idProdus
    };
    return this.http.post(`${this.uri}/factura`, factura);
  }
}





