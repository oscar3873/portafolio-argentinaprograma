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

  crear($event:any){
    this.portfolioServ.crearEducacion($event).subscribe()
    window.location.reload();
  }

  editar(){

  }

  eliminar(){

  }

}
