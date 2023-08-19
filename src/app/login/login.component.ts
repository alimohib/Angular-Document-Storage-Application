import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  validUsername = 'user'; 
  validPassword = 'password';
  showInvalidCredentialsError = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.authService.login(this.username, this.password);
      this.router.navigate(['/upload']);
    } else {
      this.showInvalidCredentialsError = true;
    }
  }
}
