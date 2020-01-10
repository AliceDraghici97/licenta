import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FunctionExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AngajatService {
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addAgent(nume, prenume, functie, dataNasterii, email, nrTelefon, idAdresa, idMasina, parola) {
    const angajat = {
      nume: nume,
      prenume: prenume,
      functie: functie,
      dataNasterii: dataNasterii,
      email: email,
      nrTelefon: nrTelefon,
      idAdresa: idAdresa,
      idMasina: idMasina,
      parola: parola
    };
    return this.http.post(`${this.uri}/utilizator`, angajat);
  }

}
