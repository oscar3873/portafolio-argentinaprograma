import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  cards:String[] =["Car1","Card2","Card3","Card4"];

  constructor() { }

  ngOnInit(): void {
  }

}
