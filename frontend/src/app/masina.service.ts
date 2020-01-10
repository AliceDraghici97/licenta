import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasinaService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.uri}/masini`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/masini/${id}`);
  }

  addMasina(marca, model, nrKm, carburant) {
    const masina = {
      marca: marca,
      model: model,
      nrKm: nrKm,
      carburant: carburant
    };
    return this.http.post(`${this.uri}/definire_masina`, masina);
  }


}
