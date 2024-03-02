import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
      const token = params.get("code");
      if (token) {
        localStorage.setItem('token', token);
        this.router.navigateByUrl("/products");
      } else {
        window.location.href = "https://nagp.auth.ap-south-1.amazoncognito.com/login?client_id=4rpandicearfs91f6t0nbpfmt&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A4200";
      }
    })
  }
  loginUser() {
    window.location.href = "https://nagp.auth.ap-south-1.amazoncognito.com/login?client_id=4rpandicearfs91f6t0nbpfmt&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A4200";
  }
}
