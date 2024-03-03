import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { COGNITO_URL } from '../../constant/app-constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activateRoute.queryParamMap.subscribe(params => {
      if(window.location.hash === ''){
        window.location.href = COGNITO_URL;
      }
      const token = window.location.hash.split("#")[1].split("&")[0].split("=")[1];
      if (token) {
        localStorage.setItem('token', token);
        this.router.navigateByUrl("/products");
      } else {
        window.location.href = COGNITO_URL;
      }
    })
  }
  loginUser() {
    window.location.href = COGNITO_URL;
  }
}
