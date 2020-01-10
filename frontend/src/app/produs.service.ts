import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdusePieChart } from './models/ProdusePieChart';

@Injectable({
  providedIn: 'root'
})
export class ProdusService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get(): Observable<ProdusePieChart[]> {
    return this.http.get<ProdusePieChart[]>(`${this.uri}/produse`);
  }

  addProdus(denumire, pret, cantitateStoc, compozitie, unitateMasura) {
    const produs = {
      denumire: denumire,
      pret: pret,
      cantitateStoc: cantitateStoc,
      compozitie: compozitie,
      unitateMasura: unitateMasura
    }
    return this.http.post(`${this.uri}/produs`, produs);
  }
}
