import { CanActivateFn } from '@angular/router';
import { Inject } from '@angular/core';

export const homeGuard: CanActivateFn = (route, state) => {
  return true;

   const authService=inject(auth);
   const router=inject(route);
  
  @if(authService.Isloggedin){
    return true;
  }

return  route.(./login)

};
