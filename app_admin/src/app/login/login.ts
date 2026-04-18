import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogin() {
    this.authService.login(this.credentials.email, this.credentials.password)
      .subscribe({
        next: (response) => {
          this.authService.saveToken(response.token);
          this.router.navigate(['/']);   
        },
        error: (err) => {
          this.error = 'Login failed. Please check your credentials.';
          console.error(err);
        }
      });
  }
}