import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() onSession!: boolean;
  miPortafolio:any;
  modalOption = [false, false, false, false, false]
  id!: number; 

  formGroup: FormGroup;

  constructor(private portfolioServ:PortfolioService, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nombre: '',
      titulo: '',
      infoPersona:'',
      ftoPerfil:''

    });
   }

  ngOnInit(): void {
    
    this.portfolioServ.obtenerDatosPersona()
    .subscribe((data)=>{
      this.miPortafolio =data[0];
      this.formGroup.setValue({
        nombre:this.miPortafolio.nombre,
        titulo:this.miPortafolio.titulo,
        infoPersona:this.miPortafolio.infoPersona,
        ftoPerfil:this.miPortafolio.ftoPerfil
      });
      this.id = this.miPortafolio.id
    });

  }

  onSubmit(data:any){
    this.editar(data)
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    window.location.reload();
  }

  openModal1(){
    console.log(this.miPortafolio)
    this.modalOption[1] = true
    return 1;
  }
  openModal2(){
    this.modalOption[2] = true
    return 2;
  }
  openModal3(){
    this.modalOption[3] = true
    return 3;
  }
  openModal4(){
    this.modalOption[4] = true
    return 4;
  }

  closeModal(){
    this.modalOption = [false, false, false, false, false]
  }

  editar(data:any){
    this.portfolioServ.modificarDatosPersona(this.id,
      data).subscribe()
  }
  
}
