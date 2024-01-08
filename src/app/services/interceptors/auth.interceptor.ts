import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('authInterceptor called');

  const token = localStorage.getItem('token');

  console.log('token', token);

  if(token){
    console.log('token found');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq);
  }

  return next(req);
};
