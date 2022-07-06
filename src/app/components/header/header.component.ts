import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() onSession!: boolean;
  miPortafolio:any;

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

}
