import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  @Input() onSession!: boolean;
  proyectos:any;

  switcher:boolean = false;
  editState:any= [false, null];

  constructor(private portfolioServ:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioServ.obtenerDatosProyecto()
    .subscribe((data)=>{
      this.proyectos = data;
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
    this.portfolioServ.crearProyecto($event)
    .subscribe(()=>{
      this.portfolioServ.obtenerDatosProyecto()
      .subscribe((data)=>{
        this.proyectos = data
      })
    })
    this.switchange("crear")
  }

  editar(data:any){
    this.portfolioServ.modificarDatosProyecto(data.id,data).subscribe(()=>{

      this.proyectos = this.proyectos.map((d:any)=>{
        if(d.id == data.id){
          d = data
        }
        return d;
      })

    })
  }

  eliminar(id:any){
    this.portfolioServ.eliminarEducacion(id).subscribe((data)=>{})
    this.proyectos = this.proyectos.filter((obj: any)=> obj.id != id)
  }

}
