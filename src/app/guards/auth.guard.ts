import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService();
  const router = new Router();

  if(!authService.isUserLoggedIn()){
    console.log('user not logged in');
     router.navigate(['login']);
  }
  console.log('user logged in');
  return true;
};
