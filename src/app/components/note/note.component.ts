import { Component, Input } from '@angular/core';
import { Note } from '../../models/note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {

  constructor(
   private router: Router
  ) { }

  @Input() note: Note = {} as Note;

  getNoteDetails(): any {
    console.log("Clicked: "+this.note);

    this.router.navigate(['/notes', this.note.id])
  
  }
}
