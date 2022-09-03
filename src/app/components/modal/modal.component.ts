import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() editMode:any
  @Input() info:any
  @Output() switch = new EventEmitter()
  @Output() infoModal= new EventEmitter()
  @Output() infoModalEdit = new EventEmitter()
  @Output() closeEdit = new EventEmitter()
  formGroup!: FormGroup
  claveID = "id"

  constructor(private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(this.info[0])
    if(!this.editMode)
      for(let key in this.info[0]){
        this.formGroup.reset(key)
      }
  }

  onSubmit(data:any){
    
    if(this.editMode){
      this.sendEdit(data)
    }else{
      this.sendModal(data)
    }
  }

  closeEditMode(){
    this.closeEdit.emit(false)
  }

  closeModal(){
    this.switch.emit(false)
  }

  sendModal(data:any){
    this.infoModal.emit(data)
  }

  sendEdit(data:any){
    this.infoModalEdit.emit(data)
  }

}