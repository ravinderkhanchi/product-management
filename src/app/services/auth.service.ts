import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthorizationToken(): string {
    // logic to get token from local
    return localStorage.getItem('token') || "";
  }
}
