import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() onSession!: boolean;
  miPortafolio:any;
  modalOption = [false, false, false, false, false]

  constructor(private portfolioServ:PortfolioService) { }

  ngOnInit(): void {
    
    this.portfolioServ.obtenerDatosPersona()
    .subscribe((data)=>{
      this.miPortafolio =data[0];
    });
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    window.location.reload();
  }

  openModal1(){
    this.modalOption[1] = true
  }
  openModal2(){
    this.modalOption[2] = true
  }
  openModal3(){
    this.modalOption[3] = true
  }
  openModal4(){
    this.modalOption[4] = true
  }

  closeModal(){
    this.modalOption = [false, false, false, false, false]
  }

  editar(){
    
  }

}
