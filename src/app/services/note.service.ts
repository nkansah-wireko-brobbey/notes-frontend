import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseApi = environment.apiUrl;

  constructor(
    private http: HttpClient,
    
  ) { }

    public saveNote(data : any): Observable<any>{
      return this.http.post(`${this.baseApi}/notes`, data);
    }

    public getNotes(): Observable<any>{
      return this.http.get(`${this.baseApi}/notes`);
    }

    public getNoteById(id: string): Observable<any>{
      return this.http.get(`${this.baseApi}/notes/${id}`);
    }

    public updateNoteById(id: string, data: any): Observable<any>{
      return this.http.put(`${this.baseApi}/notes/${id}`, data);
    }

}
