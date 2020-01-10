import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partener } from './models/Partener';

@Injectable({
  providedIn: 'root'
})
export class PartenerService {
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPartneri(tip: string): Observable<Partener[]> {
    return this.http.get<Partener[]>(`${this.uri}/parteneri/${tip}`);
  }

  addPartener(nume, email, CUI, tipPartener, telefon) {
    const partener = {
      nume: nume,
      email: email,
      CUI: CUI,
      tipPartener: tipPartener,
      telefon: telefon
    };
    return this.http.post(`${this.uri}/partener`, partener);
  }

  addAdresa(strada, numar, judet, oras, tara, apartament, scara, bloc) {
    const adresa = {
      strada: strada,
      numar: numar,
      judet: judet,
      oras: oras,
      tara: tara,
      apartament: apartament,
      scara: scara,
      bloc: bloc
    };
    return this.http.post(`${this.uri}/adresa`, adresa);
  }
}
