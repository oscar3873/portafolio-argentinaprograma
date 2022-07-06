import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  educacion:any[] =[];
  @Input() onSession!: boolean;
  constructor(private portfolioServ:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioServ.obtenerDatosEducacion()
    .subscribe((data)=>{
      this.educacion = data;
      console.log(data);
    })
  }

}
