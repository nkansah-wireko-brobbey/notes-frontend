import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { authGuard } from './guards/auth.guard';
import { NoteAddComponent } from './components/note/note-add/note-add.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';

const routes: Routes = [
  
  { path: 'login', 
  component: LoginComponent, 
  pathMatch: 'full' },
  
  { path: 'signup',
  component: SignupComponent,
  pathMatch: 'full' },

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full',
},
{
  path: '',
  component: NavbarComponent,
  children: [ 
    {
      path: 'notes',
      component: NoteListComponent,canActivate: [authGuard]
    },
    {
      path:'notes/new',
      component: NoteAddComponent,
    },
    {
      path: 'notes/:id',
      component: NoteEditComponent,
      
    }
  
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
