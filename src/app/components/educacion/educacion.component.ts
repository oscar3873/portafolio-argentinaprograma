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
  editState:boolean = false;

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
    this.editState = !this.editState
  }

  editChange(){
    this.editState = !this.editState
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

      this.educacion = this.educacion.map((d:any)=>{
        if(d.id == data.id){
          d = data
        }

        return d;

      })

    })
  }

  eliminar(id:any){
    this.portfolioServ.eliminarEducacion(id).subscribe((data)=>{})
    this.educacion = this.educacion.filter((obj: any)=> obj.id != id)
  }

}