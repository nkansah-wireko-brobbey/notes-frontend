import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoteService } from '../../../services/note.service';
import { firstValueFrom } from 'rxjs';
import { modalData } from '../../../models/ui';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrl: './note-add.component.css'
})
export class NoteAddComponent {

  modalData: modalData = {} as modalData; 


  noteForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  });

constructor(
  private formBuilder: FormBuilder,
  private noteService: NoteService,
  private modalService: ModalService
 
  ){
  }
  
  
     async onsubmit(){
        
      try{

        const note = await firstValueFrom(this.noteService.saveNote(
          this.noteForm.value
        ));
        console.log(note);
      }catch(error: any){
        this.modalData = {
          title: 'Error!',
          body: error.message,
          buttonText: 'Close',
          modalType: 'error'
        }
        this.modalService.showSuccessModal(this.modalData);
        console.log(error);

      }
        
        console.log(this.noteForm.value);
      }
}
