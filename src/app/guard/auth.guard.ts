import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);
  const protectedRoutes: string[] = ['/products'];
  const session = authService.getAuthorizationToken();
  return protectedRoutes.includes(state.url) && session ? true: router.navigateByUrl("/");
};
