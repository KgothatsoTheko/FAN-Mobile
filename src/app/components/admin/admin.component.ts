import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MaterialModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  constructor(private router: Router, private location: Location){}

  goToLanding(){
    sessionStorage.clear()
    this.router.navigate(['/landing'])
  }

}
