import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SignupRequest } from '../../models/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { modalData } from '../../models/ui';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  modalData: modalData = {} as modalData;

  signupData: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
  },{
    validators: this.passwordMatchValidator
  });

  formData: SignupRequest = {
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  }
  

  constructor(private userService: UserService, private formBuilder: FormBuilder, private modalService: ModalService){

  }
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }

  async onSubmit(): Promise<void> {

    console.log(this.signupData);
        
    this.formData = this.signupData.value;

    console.log(this.formData);

    let feedback: any;

    try {
      const response = await firstValueFrom(this.userService.signup(this.formData));
      if(response.token){
        this.modalData = {
          title: 'Success',
          body: 'Signup Successful',
          buttonText: 'login',
          modalType: 'success',
          navigateTo: '/login'
        }
        this.modalService.showSuccessModal(this.modalData);
      }
    } catch (error: any) {
      delete this.modalData.navigateTo;
      this.modalData = {
        title: 'Error',
        body: 'An error occurred: ' + (error?.error || 'Contact support'),
        buttonText: 'Try Again',
        modalType: 'error'
      }
      this.modalService.showSuccessModal(this.modalData);
      console.log(error);
    }
  }


}
