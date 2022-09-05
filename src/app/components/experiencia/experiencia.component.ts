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
  editState:any= [false, null];

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
    this.editState[0] = !(this.editState[0])
  }

  editChange(id:any){
    this.editState[1] = id
    this.editState[0] = !(this.editState[0])
  }

  crear(data:any){
    this.portfolioServ.crearExperiencia(data).subscribe(()=>{
      this.portfolioServ.obtenerDatosExperiencia()
    .subscribe((data)=>{
      this.experiencia = data;

    }) 
    })
    this.switchange("crear")
  }

  editar(data:any){
    this.portfolioServ.modificarDatosExperiencia(data.id,data).subscribe(()=>{
      this.portfolioServ.obtenerDatosExperiencia()
    .subscribe((data)=>{
      this.experiencia = data;

    }) 
    })
    this.closeEditMode()
  }

  eliminar(id:any){
    this.portfolioServ.eliminarExperiencia(id).subscribe((data)=>{})
    this.experiencia = this.experiencia.filter((obj: any)=> obj.id != id)
  }

}