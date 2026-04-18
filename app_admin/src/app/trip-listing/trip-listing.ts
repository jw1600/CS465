import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripCardComponent } from '../trip-card/trip-card';
import { TripDataService } from '../trip-data';
import { Trip } from '../trip';
import { AuthService } from '../auth';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, FormsModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css']
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  selectedTrip: Trip | null = null;

  newTrip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(
    private tripDataService: TripDataService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadTrips();
  }

  
  trackByCode(index: number, trip: Trip): string {
    return trip.code;
  }

  loadTrips() {
    this.tripDataService.getTrips().subscribe({
      next: (trips) => {
        this.trips = trips;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching trips', err)
    });
  }

  editTrip(trip: Trip) {
    this.selectedTrip = JSON.parse(JSON.stringify(trip));
  }

  saveEdit() {
    if (this.selectedTrip && this.selectedTrip.code) {
      this.tripDataService.updateTrip(this.selectedTrip).subscribe({
        next: (updated) => {
          this.trips = this.trips.map(t => t.code === updated.code ? updated : t);
          this.selectedTrip = null;
          this.cdr.detectChanges();
          alert('Update successful!');
        },
        error: (err) => console.error('Update failed', err)
      });
    }
  }

  cancelEdit() {
    this.selectedTrip = null;
  }

  addNewTrip() {
    const payload = { ...this.newTrip };
    if (!payload.code) payload.code = 'TEST' + Date.now();
    if (!payload.name) payload.name = 'New Trip';
    if (!payload.length) payload.length = '4 nights / 5 days';
    if (!payload.start) payload.start = '2026-05-01T08:00:00Z';
    if (!payload.resort) payload.resort = 'Test Resort';
    if (!payload.perPerson) payload.perPerson = '599.00';
    if (!payload.image) payload.image = 'reef4.jpg';
    if (!payload.description) payload.description = 'Test description';

    this.tripDataService.addTrip(payload).subscribe({
      next: (newTrip) => {
        this.trips = [...this.trips, newTrip];
        this.newTrip = { code: '', name: '', length: '', start: '', resort: '', perPerson: '', image: '', description: '' };
        this.cdr.detectChanges();
        alert('New trip added successfully!');
      },
      error: (err) => console.error('Add failed', err)
    });
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}