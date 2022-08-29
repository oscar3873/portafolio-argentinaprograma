import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalSwitch!:boolean
  constructor() { }

  openModal(){
    this.modalSwitch = true
  }

  closeModal(){
    this.modalSwitch = false
  }
}