import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Candidato } from './candidatos/candidato/candidato.component';
import { Tecnologia } from './tecnologias/tecnologia/tecnologia.component';
import { CandTec } from './candidatos-tecnologia/cand-tec/cand-tec.component';
import { ExpLab } from './experienciaLaboral/exp-lab/exp-lab.component';
import { Titulo } from './Titulos/titulo/titulo.component';
import { User } from './Users/user/user.component';

const servidor = 'http://127.0.0.1:8080';

const urlCand = servidor + '/candidato';
const urlTec = servidor + '/tecnologia';
const urlCandTec = servidor + '/candTec';
const urlExpLab = servidor + '/expLab';
const urlTitulo = servidor + '/titulo';
const urlUser = servidor + '/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  private objExpLab : any;
  private objCand : any;
  private objTec : any;
  private objTit : any;

  constructor(private http: HttpClient) { }

  getCandidatos(): Observable<any>{
    return this.http.get(urlCand).pipe(
      map(res => res)
    )
  }

  addCandidato(candidato : Candidato){
    return this.http.post<Candidato>(urlCand, JSON.stringify(candidato), httpOptions).pipe(
      tap((candidato) => console.log("cand añadido"))
    )
  }

  delCandidato(candidato: Candidato){
    let options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
      body: candidato
    };
    return this.http.delete<Candidato>(urlCand, options).pipe(
      tap((candidato) => console.log("cand borrado"))
    );
  }

  candViaja(candidato: Candidato){
    this.objCand = candidato;
  }

  getObjCand(){
    return this.objCand;
  }

  putCandidato(candidato: Candidato){
    return this.http.put<Candidato>(urlCand, JSON.stringify(candidato), httpOptions).pipe(
      tap((candidato) => console.log("cand modificado"))
    );
  }

  getTecnologias(): Observable<any>{
    return this.http.get(urlTec).pipe(
      map(res => res)
    )
  }

  addTecnologia(tec: Tecnologia){
    return this.http.post<Tecnologia>(urlTec, JSON.stringify(tec), httpOptions).pipe(
      tap((tec) => console.log("tec añadida"))
    )
  }

  delTecnologia(tecnologia:  Tecnologia){
    let options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
      body : tecnologia
    };

    return this.http.delete<Tecnologia>(urlTec, options).pipe(
      tap((tecnologia) => console.log("tec borrada."))
    )
  }
  
  putTecnologia(tecnologia : Tecnologia){
    return this.http.put<Tecnologia>(urlTec, JSON.stringify(tecnologia), httpOptions).pipe(
      tap((tecnologia) => console.log("tec modificada"))
    )
  }

  tecViaja(tec: Tecnologia){    
     this.objTec = tec;
  }

  getObjTec(){
    return this.objTec;
  }

  getCandTecSi(candidato : Candidato) : Observable<any>{ 
    console.log(candidato);   
    let urlCandTecSi = servidor + "/candTecSi"; 
    let endPoint = "?candId=" + candidato.id; 
    return this.http.get(urlCandTecSi + endPoint).pipe(
      tap((candTec) => console.log(candTec))
    )
  }

  getCandTecNo(candidato : Candidato) : Observable<any>{
    let urlCandTecNo = servidor + "/candTecNo";
    let endPoint = "?candId=" + candidato.id;
    return this.http.get(urlCandTecNo + endPoint).pipe(
      tap((candTec) => console.log(candTec))
    )
  }

  putCandTec(candTec : CandTec){
    return this.http.put<CandTec>(urlCandTec, JSON.stringify(candTec), httpOptions).pipe(
      tap((candTec) => console.log(candTec))
    )
  }

  addCandTec(candTec : CandTec){
    return this.http.post<CandTec>(urlCandTec, JSON.stringify(candTec), httpOptions).pipe(
      tap((candTec) => console.log("candTec creado"))
    )
  }

  delCandTec(candTec : CandTec){
    let options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      }),
      body : candTec
    };

    return this.http.delete<CandTec>(urlCandTec, options).pipe(
      tap((candTec) => console.log("candTec borrada"))
    )
  }

  getExpLab(candidato: Candidato){
    let endPoint = "?candId=" + candidato.id; 
    return this.http.get(urlExpLab + endPoint).pipe(
      tap((expLab) => console.log(expLab))
    )
  }

  addExpLab(expLab : ExpLab){
    return this.http.post<ExpLab>(urlExpLab, JSON.stringify(expLab), httpOptions).pipe(
      tap((expLab) => console.log("expLab creada"))
    )
  }

  delExpLab(expLab : ExpLab){
    let options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      }),
      body : expLab
    };
    return this.http.delete<ExpLab>(urlExpLab, options).pipe(
      tap((expLab) => console.log("expLab borrada"))
    )
  }

  expLabViaja(expLab: ExpLab){
    this.objExpLab = expLab;
  }

  getObjExpLab(){
    return this.objExpLab;
  }

  putExpLab(expLab: ExpLab){
    return this.http.put<ExpLab>(urlExpLab, JSON.stringify(expLab), httpOptions).pipe(
      tap((expLab) => console.log("expLab modificada"))
    )
  }   
  
  addTitulo(titulo: Titulo){
    return this.http.post<Titulo>(urlTitulo, JSON.stringify(titulo), httpOptions).pipe(
      tap((titulo) => console.log(titulo.nombre + " guardado"))
    )
  }

  getTitulo(candidato: Candidato){
    let endPoint = "?candId="+candidato.id;
    return this.http.get(urlTitulo + endPoint).pipe(
      tap((titulo) => console.log(titulo))
    )
  }
  
  delTitulo(titulo: Titulo){
    let options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      }),
      body : titulo
    };
    return this.http.delete<Titulo>(urlTitulo, options).pipe(
      tap((titulo) => console.log("titulo guardado"))
    )
  }
  
  tituloViaja(titulo: Titulo){
    this.objTit = titulo;
  }

  getObjTit(){
    return this.objTit;
  }

  putTitulo(titulo: Titulo){
    return this.http.put<Titulo>(urlTitulo, JSON.stringify(titulo), httpOptions).pipe(
      tap((titulo) => console.log("titulo modificado"))
    )
  }

  getUser(nombre: string, pass: string){    
    let endPoint = '?nombre='+nombre+'&pass='+pass;    
    return this.http.get(urlUser+endPoint).pipe(
      map(res => res)      
    )
  }

  addUser(user: User){
    return this.http.post<User>(urlUser, JSON.stringify(user), httpOptions).pipe(
      tap((user) => console.log(user))
    )
  }



  //------------------------------------------------


  getUserDetails(username, password){
    
  }
}
