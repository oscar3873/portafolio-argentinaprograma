import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string = "https://portafolio-argprograma-backend.herokuapp.com/api/"

  constructor(private http:HttpClient) { }

  //Datos Personales
  obtenerDatosPersona():Observable<any>{
    return this.http.get(this.url+"persona/ver");
  }
  modificarDatosPersona(id:number, persona:any):Observable<any>{
    return this.http.put(`${this.url}persona/${id}`,persona)
  }

  //Experiencia
  obtenerDatosExperiencia():Observable<any>{
    return this.http.get(this.url+"experiencia/ver");
  }
  modificarDatosExperiencia(id:number, experiencia:any):Observable<any>{
    return this.http.put(`${this.url}experiencia/${id}`,experiencia)
  }
  crearExperiencia(experiencia:any):Observable<any>{
    return this.http.post(`${this.url}experiencia/new`, experiencia)
  }
  eliminarExperiencia(id:number):Observable<any>{
    return this.http.delete(`${this.url}experiencia/delete/${id}`)
  }

  //Educacion
  obtenerDatosEducacion():Observable<any>{
    return this.http.get(this.url+"educacion/ver");
  }
  modificarDatosEducacion(id:number, educacion:any):Observable<any>{
    return this.http.put(`${this.url}educacion/${id}`,educacion)
  }
  crearEducacion(educacion:any):Observable<any>{
    return this.http.post(`${this.url}educacion/new`, educacion)
  }
  eliminarEducacion(id:number):Observable<any>{
    return this.http.delete(`${this.url}educacion/delete/${id}`)
  }

  //Skill
  obtenerDatosSkill():Observable<any>{
    return this.http.get(this.url+"skill/ver");
  }
  modificarDatosSkill(id:number, skill:any):Observable<any>{
    return this.http.put(`${this.url}skill/${id}`,skill)
  }
  crearSkill(skill:any):Observable<any>{
    return this.http.post(`${this.url}skill/new`, skill)
  }
  eliminarSkill(id:number):Observable<any>{
    return this.http.delete(`${this.url}skill/delete/${id}`)
  }

  //Proyectos
  obtenerDatosProyecto():Observable<any>{
    return this.http.get(this.url+"proyecto/ver");
  }
  modificarDatosProyecto(id:number, proyecto:any):Observable<any>{
    return this.http.put(`${this.url}proyecto/${id}`,proyecto)
  }
  crearProyecto(proyecto:any):Observable<any>{
    return this.http.post(`${this.url}proyecto/new`, proyecto)
  }
  eliminarProyecto(id:number):Observable<any>{
    return this.http.delete(`${this.url}proyecto/delete/${id}`)
  }

}
