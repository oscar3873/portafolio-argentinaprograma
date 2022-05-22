import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  text:string = "";

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  async init () {

    await this.dormir(1000);
    await this.escribir("Hola, ");

    while(true){
      await this.escribir("Me llamo Oscar Vargas");
      await this.dormir(2000);
      await this.borrar();
      await this.escribir("Y soy Desarrollador FullStack JR.");
      await this.dormir(2000);
      await this.borrar();
    }
  }

  async escribir(text:string){
    for (let character of text) {
      this.text += character
      await this.dormir(this.typeInterval())
    }
  }

  async borrar(){
    for (let _character of this.text) {
      this.text = this.text.slice(0, this.text.length -1)
      await this.dormir(this.typeInterval())
    }
  }
  async dormir(time: number){
    return new Promise(resolve => setTimeout(resolve, time))
  }

  private typeInterval (): number {
    const randomMs = 100 * Math.random();
    return randomMs < 50 ? 30 : randomMs;
  }
  

}
