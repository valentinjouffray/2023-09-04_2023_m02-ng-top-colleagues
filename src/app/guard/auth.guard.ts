import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../providers/auth.service";

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.checkIsLoggedIn()) {
    router.navigate(['login']).then();
    return false;
  }
  return true;
};
