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

  crear($event:any){
    this.portfolioServ.crearProyecto($event).subscribe()
  }

  editar(){

  }

  eliminar(){

  }

}
