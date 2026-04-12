import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})
export class TripCardComponent {
  @Input() trip!: Trip;
  @Output() editClicked = new EventEmitter<Trip>();

  onEdit() {
    console.log('Edit clicked for:', this.trip ? this.trip.name : 'undefined');
    this.editClicked.emit(this.trip);   
  }
}