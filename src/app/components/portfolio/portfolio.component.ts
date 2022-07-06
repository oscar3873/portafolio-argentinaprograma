import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  onSession!: boolean;

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('currentUser')?.includes(this.authServ.usuarioAuth.accessToken)){
      this.onSession = true;
    }else{
      this.onSession = false;
    }
  }

}
