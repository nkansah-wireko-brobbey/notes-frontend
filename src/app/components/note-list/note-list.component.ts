import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { firstValueFrom } from 'rxjs';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit {

  notes: Note[] = []; 

    ngOnInit(): void {
        this.getNotes();
    }

    constructor(
      private noteService: NoteService
    ) { }

   async getNotes(): Promise<any> {

    try {

      const response: Note[] = await firstValueFrom(this.noteService.getNotes())
      
      if(response){
        this.notes = response;
      }
      console.log(response);

    } catch (error) {
      
      console.log(error);

    }

    }
    
}
