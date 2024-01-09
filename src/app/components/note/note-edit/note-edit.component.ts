import { Component, OnInit } from '@angular/core';
import { modalData } from '../../../models/ui';
import { ModalService } from '../../../services/modal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoteService } from '../../../services/note.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrl: './note-edit.component.css'
})
export class NoteEditComponent implements OnInit {
  modalData: modalData = {} as modalData; 

  //noteId
  noteId: any;

  //note data
  note: any;

  noteForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  });

constructor(
  private formBuilder: FormBuilder,
  private noteService: NoteService,
  private modalService: ModalService,
  private route: ActivatedRoute,
  
 
  ){
  }
  ngOnInit(): void {
    this.getNoteDetails()
  }

  getNoteDetails(): any {
      this.route.paramMap.subscribe(params => {
         this.noteId = params.get('id')
        if(this.noteId){

          try {
            
            this.noteService.getNoteById(this.noteId).subscribe(note => {
              this.noteForm.patchValue(note);
              this.note = note;
              console.log(note);
            })
            

          } catch (error) {
            console.log(error);
          }
        }
      });
  }
  
  
     async onsubmit(){

      // this.note.patchValue(this.noteForm.value);
      this.note.id = this.noteId;
      this.note.title = this.noteForm.value.title;
      this.note.content = this.noteForm.value.content;

      console.log(this.note);
        
      try{

        const note = await firstValueFrom(this.noteService.updateNoteById( this.noteId,
          this.note
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
