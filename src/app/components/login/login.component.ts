import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup

  constructor(private location: Location, private router: Router, private snackbar: MatSnackBar) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
    
  }

  loginBtn() {
    const emailForm = this.loginForm.value

    if(this.loginForm.valid) {
      console.log('Email:', emailForm)
      // Send to backend
      // navigate page
      if(emailForm.email == 'admin1@gmail.com'){
        this.router.navigate(['admin/dashboard'])
      } else {
      this.snackbar.open('Admin Only!!', 'Ok', {duration: 3000}) 
      }
    } else {
      this.snackbar.open('Enter vaild email address', 'Ok', {duration: 3000})
    }
  }

  goBack(){
    this.location.back()
  }

}
