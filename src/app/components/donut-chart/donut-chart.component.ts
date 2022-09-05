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
  data:any = [];
  ids:any=[];
  imgUrls:String[] = [];
  @Input() onSession!: boolean;
  skills:any;

  switcher:boolean = false;
  editState:any= [false, null];

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
        this.ids.push(element.id)
        this.imgUrls.push(element.url);
      });
    });
  }

  switchange($event: any){
    this.switcher = !this.switcher
  }

  closeEditMode(){
    this.editState[0] = !(this.editState[0])
  }

  editChange(id:any = 1){
    this.editState[1] = id
    this.editState[0] = !(this.editState[0])
  }

  crear(data:any){
    this.portfolioServ.crearSkill(data)
    .subscribe(()=>{
      this.portfolioServ.obtenerDatosSkill()
    .subscribe((data)=>{
      this.skills = data;
      let dataNew:any = []
      let idsNew:any = []
      let imgUrlsNew:any = []
      this.skills.forEach((element:any) => {
        dataNew.push(
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
        idsNew.push(element.id)
        imgUrlsNew.push(element.url);
      });
    
      this.data = dataNew
      this.ids = idsNew
      this.imgUrls = imgUrlsNew

    });
    })
    this.switchange("crear")
  }

  editar(data:any){

    this.portfolioServ.modificarDatosSkill(data.id,data).subscribe(()=>{

      this.portfolioServ.obtenerDatosProyecto()
      .subscribe((data)=>{
        this.skills = data;

      }) 

      let idsNew:any = []
      let imgUrlsNew:any = []
      let dataNew:any = []
      this.skills.forEach((element:any) => {
        dataNew.push(
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
        idsNew.push(element.id)
        imgUrlsNew.push(element.url);
      });
    
      this.data = dataNew
      this.ids = idsNew
      this.imgUrls = imgUrlsNew

    })

    this.editChange()

  }

  eliminar(id:any){
    this.portfolioServ.eliminarSkill(id).subscribe((data)=>{})
    this.skills = this.skills.filter((obj: any)=> obj.id != id)
    this.data = []
    let idsNew:any = []
    let imgUrlsNew:any = []
    let dataNew:any = []
    this.skills.forEach((element:any) => {
      dataNew.push(
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
      idsNew.push(element.id)
      imgUrlsNew.push(element.url);
    });
  
    this.data = dataNew
    this.ids = idsNew
    this.imgUrls = imgUrlsNew
  }

}
