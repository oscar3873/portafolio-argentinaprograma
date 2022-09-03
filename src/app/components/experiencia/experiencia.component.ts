import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  @Input() onSession!: boolean;
  experiencia:any

  switcher:boolean = false;
  editState:boolean = false;

  constructor(private portfolioServ:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioServ.obtenerDatosExperiencia()
    .subscribe((data)=>{
      this.experiencia = data;

    })

  }

  switchange($event: any){
    this.switcher = !this.switcher
  }

  closeEditMode(){
    this.editState = !this.editState
  }

  editChange(){
    this.editState = !this.editState
  }

  crear(data:any){
    this.portfolioServ.crearExperiencia(data).subscribe()
    this.switchange("crear")
  }

  editar(data:any){
    console.log("entre")
    this.portfolioServ.modificarDatosExperiencia(data.id,data).subscribe(()=>{

      this.experiencia = this.experiencia.map((d:any)=>{
        if(d.id == data.id){
          d = data
        }

        return d;

      })

    })
  }

  eliminar(id:any){
    this.portfolioServ.eliminarExperiencia(id).subscribe((data)=>{})
    this.experiencia = this.experiencia.filter((obj:any)=>{})
  }

}
