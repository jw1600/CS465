import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login';
import { TripListingComponent } from './trip-listing/trip-listing';
import { AuthService } from './auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, TripListingComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  constructor(public authService: AuthService) { }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}