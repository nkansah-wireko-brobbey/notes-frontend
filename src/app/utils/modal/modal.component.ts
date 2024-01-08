import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { modalData } from '../../models/ui';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';

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

  constructor(private router: Router, private modalService: ModalService) { 
    
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
    this.modalService.hideSuccessModal();
    
    //Navigate to the route specified in the modalData
    if(this.modalData.navigateTo){
      this.router.navigate([this.modalData.navigateTo]);
    }
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
