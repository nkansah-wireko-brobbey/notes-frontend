import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { modalData } from '../../models/ui';
// import { constructor } from 'jasmine';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {

  status: boolean = true;

  isSuccess: boolean = false;
  isWarning: boolean = false;

  @Input() modalData: modalData = {} as modalData;

  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes['modalData']) {
        console.log('modalData changed');
        if (this.modalData.modalType === 'error') {
          this.setWarning();
          console.log('error');
          
        }else{  
          this.setSuccess();
          console.log('success');
        }
      }
  }

  public show(){
    this.status = true;
  }

  public hide(){
    this.status = false;
  }

  public toggle(){
    this.status = !this.status;
  }

  public getStatus(){
    return this.status;
  }

  public setSuccess(){
    this.isSuccess = true;
    this.isWarning = false;
  }

  public setWarning(){
    this.isSuccess = false;
    this.isWarning = true;
  }


}
