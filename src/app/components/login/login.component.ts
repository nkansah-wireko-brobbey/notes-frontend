import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { modalData } from '../../models/ui';
import { firstValueFrom } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  modalData : modalData = {} as modalData;

  loginData: FormGroup = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(4)]]
  });

  constructor(
    private userService: UserService, 
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private storageService: StorageService
    ) { }

  ngOnInit(){
   
  }

  public test(){
    this.modalService.showSuccessModal(this.modalData);
    
    this.userService.test().subscribe(
      res => {
        console.log(res);
      }
    );
  }

  async onSubmit(): Promise<void> {
    console.log(this.loginData.value);
    const formData = this.loginData.value;

    this.storageService.deleteToken();

    this.modalData = {
      title: 'Success!',
      body: 'You have successfully logged in!',
      buttonText: 'Close',
      modalType: 'success',
      navigateTo: '/notes'
    }

    try {

      const response = await firstValueFrom(this.userService.login(formData));
      if(response.token){
        this.modalService.showSuccessModal(this.modalData);
        console.log(response);
        this.storageService.saveToken(response.token);
      }
    } catch (error: any) {
      console.log(error);
      this.modalData = {
        title: 'Error',
        body: 'An error occurred: ' + (error?.error || 'Contact support'),
        buttonText: 'Close',
        modalType: 'error'
      }
      this.modalService.showSuccessModal(this.modalData);
    }
  }

  public showSuccessModal(){

    console.log('showing modal');

    // this.modalService.showSuccessModal();

  }

}
