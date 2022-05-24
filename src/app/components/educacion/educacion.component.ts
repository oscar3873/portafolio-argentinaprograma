import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  cards:String[] =["Car1","Card2","Card3","Card4"];
  constructor() { }

  ngOnInit(): void {
  }

}
