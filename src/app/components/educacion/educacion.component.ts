import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  @Input() onSession!: boolean;
  educacion:any

  switcher:boolean = false;
  editState:any= [false, null];

  constructor(private portfolioServ:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioServ.obtenerDatosEducacion()
    .subscribe((data)=>{
      this.educacion = data;
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

  crear($event:any){
    this.portfolioServ.crearEducacion($event)
    .subscribe(()=>{
      this.portfolioServ.obtenerDatosEducacion()
      .subscribe((data)=>{
        this.educacion = data;
      })
    })
    this.switchange("crear")
  }

  editar(data:any){
    this.portfolioServ.modificarDatosEducacion(data.id,data).subscribe(()=>{
      this.portfolioServ.obtenerDatosEducacion()
    .subscribe((data)=>{
      this.educacion = data;

    }) 
    })
    this.closeEditMode()
  }

  eliminar(id:any){
    this.portfolioServ.eliminarEducacion(id).subscribe((data)=>{})
    this.educacion = this.educacion.filter((obj: any)=> obj.id != id)
  }

}