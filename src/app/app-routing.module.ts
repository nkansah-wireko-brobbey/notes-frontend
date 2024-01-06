import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteListComponent } from './components/note-list/note-list.component';

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
      component: NoteListComponent
    },
  
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
