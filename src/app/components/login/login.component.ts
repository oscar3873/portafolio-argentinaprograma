import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private ruta:Router) {
      this.form = this.formBuilder.group(
        {
          username:['',[Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
          password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
        }
      )
   }

  ngOnInit(): void {
  }

  get Username(){
    return this.form.get('username');
  }

  get Password(){
    return this.form.get('password');
  }

  onSubmit(event:Event){
    event.preventDefault;
    this.authService.iniciarSesion(this.form.value)
    .subscribe(data=>{
      this.ruta.navigate(["/portfolio"]);
    })

  }

}
