import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string = "http://localhost:8080/api/"

  constructor(private http:HttpClient) { }

  obtenerDatosPersona():Observable<any>{
    return this.http.get(this.url+"persona/ver");
  }
  obtenerDatosExperiencia():Observable<any>{
    return this.http.get(this.url+"experiencia/ver");
  }
  obtenerDatosEducacion():Observable<any>{
    return this.http.get(this.url+"educacion/ver");
  }
  obtenerDatosSkill():Observable<any>{
    return this.http.get(this.url+"skill/ver");
  }
  obtenerDatosProyecto():Observable<any>{
    return this.http.get(this.url+"proyecto/ver");
  }

}
