import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-booking',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './manage-booking.component.html',
  styleUrl: './manage-booking.component.scss'
})
export class ManageBookingComponent {
  displayedColumns: string[] = ['stylist', 'date', 'time', 'client', 'status', 'actions'];
  bookings = [
    { stylist: 'Jane Doe', date: '2023-10-01', time: '10:00 AM', client: 'Alice', status: 'Pending' },
    { stylist: 'John Smith', date: '2023-10-02', time: '11:00 AM', client: 'Bob', status: 'Confirmed' },
  ];

  totalEarnings = 5000;
  stylistEarnings = [
    { name: 'Jane Doe', earnings: 1500 },
    { name: 'John Smith', earnings: 1200 },
  ];

  reviews = [
    { client: 'Alice', comment: 'Great service!', rating: 5 },
    { client: 'Bob', comment: 'Could be better.', rating: 3 },
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'Pending':
        return 'warn';
      case 'Confirmed':
        return 'primary';
      case 'Completed':
        return 'accent';
      default:
        return '';
    }
  }

  acceptBooking(booking: any) {
    console.log('Booking accepted:', booking);
  }

  rejectBooking(booking: any) {
    console.log('Booking rejected:', booking);
  }
}
