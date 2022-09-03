import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  doughnut:ChartType = "doughnut";
  data:ChartData[] = [];
  imgUrls:String[] = [];
  @Input() onSession!: boolean;
  skills:any;

  switcher:boolean = false;

  constructor(private portfolioServ:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioServ.obtenerDatosSkill()
    .subscribe((data)=>{
      this.skills = data;
      this.skills.forEach((element:any) => {
        this.data.push(
          {
            datasets: [{
                label: element.lenguajeProgramacion,
                data: [
                  element.anioExp, element.anioExp, element.anioExp, element.anioExp, element.anioExp,
                  element.anioExp, element.anioExp, element.anioExp, element.anioExp, element.anioExp
                ],
                backgroundColor:()=>{
                  
                  let colores:any = [];
                  for (let count = 0; count < 10; count++) {
                    if(count < element.anioExp){
                      colores.push("#DFDFF7");
                    }else{
                      colores.push("#9496F7")
                    }
                    
                  }
                  return colores;
                }
                ,
                borderColor:"#40416B",
            }],
          }
        )

        this.imgUrls.push(element.url);

      });
    });
  }

  switchange($event: any){
    this.switcher = !this.switcher
  }

  crear($event:any){
    this.portfolioServ.crearSkill($event).subscribe()
  }

  editar(){

  }

  eliminar(){

  }

}
