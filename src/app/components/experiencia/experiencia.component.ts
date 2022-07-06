import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  @Input() onSession!: boolean;
  cards:String[] =["Car1","Card2","Card3","Card4"];

  constructor() { }

  ngOnInit(): void {
  }

}
