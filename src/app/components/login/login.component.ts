import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { modalData } from '../../models/ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  modalTitle: string = 'Success!';
  modalBody: string = 'You have successfully logged in!';

  modalData : modalData = {
    title: 'Success!',
    body: 'You have successfully logged in!',
    buttonText: 'Close',
    modalType: 'success'
  }

  constructor(private authService: AuthService, private modalService: ModalService) { }

  ngOnInit(){
    this.test();
  }

  public test(){
    this.modalService.showSuccessModal(this.modalData);
    
    this.authService.test().subscribe(
      res => {
        console.log(res);
      }
    );
  }

  public showSuccessModal(){

    console.log('showing modal');

    // this.modalService.showSuccessModal();

  }

}
