import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  menuItems = [
    {
      name: "Book Service",
      icon: "add_location",
      route: '/customer/service'
    },
    {
      name: "Appointments",
      icon: "events",
      route: '/customer/appointments'
    },
    {
      name: "Rate",
      icon: "stars",
      route: '/customer/rate'
    },
  ]

  constructor(private router: Router){}

  goToLogin() {
    this.router.navigate(['login'])
  }

  goHome() {
    this.router.navigate(['customer/home'])
  }

}
