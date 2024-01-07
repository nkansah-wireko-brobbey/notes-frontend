import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // 
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NoteComponent } from './components/note/note.component';
import { NoteAddComponent } from './components/note/note-add/note-add.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './utils/modal/modal.component';
import { authInterceptor } from './services/interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NoteComponent,
    NoteAddComponent,
    NoteEditComponent,
    NoteListComponent,
    NavbarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors(
        [authInterceptor]
      )
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
