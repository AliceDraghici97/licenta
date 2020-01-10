'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
var login = require('./routes/loginroutes');
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.json({
    message: 'welcome to our upload module apis'
  });
});

//route to handle user registration
app.post('/login', login.login)

// add a basic route
app.get('/', function (req, res) {
  res.json({
    message: 'Express is up!'
  });
});

// start the app
app.listen(3000, function () {
  console.log('Express is running on port 3000');
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Instalati3',
  database: 'licentos'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connection to db was succesful!');
});

//INSERT MASINA
app.post('/definire_masina', function (req, res) {
  const marca = req.body.marca;
  const model = req.body.model;
  const nrKm = req.body.nrKm;
  const carburant = req.body.carburant;
  const sql = 'INSERT INTO Masina (marca,model , nrKm ,carburant) VALUES (?,?,?,?)';
  db.query(sql, [marca, model, nrKm, carburant], (err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.send(model);
})

//INSERT FACTURA
app.post('/factura', function (req, res) {
  const data = req.body.data;
  const cantitateCumparata = req.body.cantitateCumparata;
  const valoare = req.body.valoare;
  const metodaPlata = req.body.metodaPlata;
  const idPartener = req.body.idPartener;
  const idProdus = req.body.idProdus;
  const sql = 'INSERT INTO Factura(data, cantitateCumparata, valoare, metodaPlata, fk_idPartener, fk_idProdus) VALUES (?,?,?,?,?,?)';
  db.query(sql, [data, cantitateCumparata, valoare, metodaPlata, 1, 2], (err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.send(cantitateCumparata);
})

//SELECT FACTURI
app.get('/facturi', (req, res) => {
  let sql = "SELECT f.id, p.nume, f.data, pp.denumire, pp.unitateMasura, pp.pret, f.cantitateCumparata, f.valoare FROM FACTURA f, Produs pp, Partener p WHERE f.fk_idPartener=p.id AND f.fk_idProdus=pp.id";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});

//SELECT VALOARE FACTURA
app.get('/facturi/:year', (req, res) => {
  let sql = `SELECT f.valoare FROM FACTURA f WHERE YEAR(f.data)=${req.params.year}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});

//SELECT NUME SI CANTTATE PRODUSE
app.get('/produse', (req, res) => {
  let sql = `SELECT denumire as denumire, cantitateStoc as cantitate FROM Produs`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});

//LOGIN
app.get('/loginn/:email/:parola', (req, res) => {
  let sql = ("SELECT COUNT(*) as count FROM `Utilizator` WHERE `Email`='" + req.params.email + "' AND `Parola`='" + req.params.parola + "'");
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});

//INSERT ADRESA
app.post('/adresa', function (req, res) {
  const strada = req.body.strada;
  const numar = req.body.numar;
  const judet = req.body.judet;
  const oras = req.body.oras;
  const tara = req.body.tara;
  const apartament = req.body.apartament;
  const scara = req.body.scara;
  const bloc = req.body.bloc;
  const sql = 'INSERT INTO Adresa (strada, numar, judet, oras, tara, apartament, scara, bloc) VALUES (?,?,?,?,?,?,?,?)';
  db.query(sql, [strada, numar, judet, oras, tara, apartament, scara, bloc], (err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.send(strada);
})

//INSERT PARTENER
app.post('/partener', function (req, res) {
  const nume = req.body.nume;
  const email = req.body.email;
  const CUI = req.body.CUI;
  const TipPartener = req.body.tip;
  const telefon = req.body.telefon;
  const sql = 'INSERT INTO Partener(nume, email, CUI, TipPartener, telefon) VALUES (?,?,?,?,?)';
  db.query(sql, [nume, email, CUI, TipPartener, telefon], (err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.send(nume);
})

//SELECT PARTENERI IN FUNCTIE DE TIP
app.get('/parteneri/:tip', (req, res) => {
  let sql = ("SELECT ID as id, Nume as nume, CUI as cui, TipPartener as tip, Telefon as telefon, Email as email FROM `Partener` WHERE `TipPartener`='" + req.params.tip + "'");
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});

//INSERT UTILIZATOR
app.post('/utilizator', function (req, res) {
  const nume = req.body.nume;
  const prenume = req.body.prenume;
  const functie = req.body.functie;
  const dataNasterii = req.body.dataNasterii;
  const email = req.body.email;
  const nrTelefon = req.body.nrTelefon;
  const idMasina = req.body.idMasina;
  const parola = req.body.parola;
  const idAdresa = req.body.idAdresa;
  const sql = 'INSERT INTO Utilizator(Nume, Prenume, Functie, DataNasterii, Email, NrTelefon, FK_IdAdresa, UK_IdMasina, Parola) VALUES (?,?,?,?,?,?,?,?,?)';
  db.query(sql, [nume, prenume, functie, dataNasterii, email, nrTelefon, idAdresa, idMasina, parola], (err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.send(nume, prenume);
})


//INSERT PRODUS
app.post('/produs', function (req, res) {
  const denumire = req.body.denumire;
  const pret = req.body.pret;
  const cantitateStoc = req.body.cantitateStoc;
  const compozitie = req.body.compozitie;
  const unitateMasura = req.body.unitateMasura;
  const sql = 'INSERT INTO Produs(denumire,pret,cantitateStoc,compozitie,unitateMasura) VALUES (?,?,?,?,?)';
  db.query(sql, [denumire, pret, cantitateStoc, compozitie, unitateMasura], (err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.send(denumire);
})