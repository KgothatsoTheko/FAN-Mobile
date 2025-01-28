import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { SliderComponent } from "../slider/slider.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MaterialModule, SliderComponent, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  constructor(private router: Router){}

  public slides = [
    { src: "../../../assets/pic1.jpg" },
    { src: "../../../assets/pic2.jpg" },
    { src: "../../../assets/pic3.jpg" },
    { src: "../../../assets/pic4.jpg" },
    { src: "../../../assets/pic5.jpg" },
    { src: "../../../assets/pic6.jpg" },
    { src: "../../../assets/pic7.jpg" },
    { src: "../../../assets/pic8.jpg" },
    { src: "../../../assets/pic9.jpg" },
    { src: "../../../assets/pic10.jpg" },
    { src: "../../../assets/pic11.jpg" }
  ]

  goToLogin() {
    this.router.navigate(['login'])
  }

  goHome() {
    this.router.navigate(['customer/home'])
  }

  goToBooking() {
    this.router.navigate(['customer/service'])
  }


}
