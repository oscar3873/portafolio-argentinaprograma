import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() valor:any
  @Input() info:any
  @Output() switch = new EventEmitter()
  @Output() infoModal= new EventEmitter()
  formGroup!: FormGroup
  claveID = "id"

  constructor(private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(this.info[0])
    for(let key in this.info[0]){
      this.formGroup.reset(key)
    }
  }

  onSubmit(data:any){
    this.sendModal(data)
  }

  closeModal(){
    this.switch.emit(false)
  }

  sendModal(data:any){
    this.infoModal.emit(data)
  }

}