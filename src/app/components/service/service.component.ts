import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StepperOrientation } from '@angular/cdk/stepper';
import { map, Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-service',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  @ViewChild('stepper') stepper!: MatStepper

  selected!: Date | null;

  myFilter = (d: Date | null): boolean => {
    const today = new Date(); // Get today's date
  today.setHours(0, 0, 0, 0); // Reset the time to midnight for accurate comparison
  const selectedDate = d || new Date(); // Use the provided date or default to today

  // Allow only dates that are today or in the future
  return selectedDate >= today;
  };

  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  thirdFormGroup: FormGroup
  orderForm: FormGroup
  stepperOrientation: Observable<StepperOrientation>;

  public services = [
    {src: "../../../assets/pic1.jpg",
      title: 'French Curls',
      time: '4HRS 20MIN - 6HRS',
      price: '800',
      values: 'Order1'
    },
    {src: "../../../assets/pic2.jpg",
      title: 'Bob Curls',
      time: '4HRS 20MIN - 6HRS',
      price: '800',
      values: 'Order2'
    },
    {src: "../../../assets/pic3.jpg",
      title: 'Knotless Braids',
      time: '4HRS 30MIN - 5HRS',
      price: '850',
      values: 'Order3'
    },{src: "../../../assets/pic4.jpg",
      title: 'Knotless Boha Braids',
      time: '4HRS 30MIN - 5HRS',
      price: '950',
      values: 'Order4'
    },{src: "../../../assets/pic5.jpg",
      title: 'Knotless Braids',
      time: '4HRS 30MIN - 5HRS',
      price: '850',
      values: 'Order5'
    },{src: "../../../assets/pic6.jpg",
      title: 'Bohamian Braids',
      time: '4HRS 30MIN - 8HRS',
      price: '950',
      values: 'Order6'
    },{src: "../../../assets/pic7.jpg",
      title: 'Gypsy Locs',
      time: '3HRS 30MIN',
      price: '1200',
      values: 'Order7'
    },{src: "../../../assets/pic8.jpg",
      title: 'Knotless 2/3 Toned Braids',
      time: '4HRS 20MIN - 6HRS',
      price: '1050',
      values: 'Order8'
    },{src: "../../../assets/pic9.jpg",
      title: 'Jozi Lits Faux Locs',
      time: '4HRS 20MIN - 6HRS',
      price: '850',
      values: 'Order9'
    },{src: "../../../assets/pic10.jpg",
      title: 'Bohemian Fulani',
      time: '3HRS 30MIN - 4HRS',
      price: 'R900',
      values: 'Order10'
    },
    {src: "../../../assets/pic11.jpg",
      title: 'Bohemian Fulani',
      time: '3HRS 30MIN - 4HRS',
      price: '900',
      values: 'Order11'
    },
  ]

  times: any[] = [
    {value: '08:00', viewValue: '08:00'},
    {value: '08:15', viewValue: '08:15'},
    {value: '08:30', viewValue: '08:30'},
    {value: '08:45', viewValue: '08:45'},
    {value: '09:00', viewValue: '09:00'},
    {value: '09:15', viewValue: '09:15'},
    {value: '09:30', viewValue: '09:30'},
    {value: '09:45', viewValue: '09:45'},
    {value: '10:00', viewValue: '10:00'},
    {value: '10:15', viewValue: '10:15'},
    {value: '10:30', viewValue: '10:30'},
    {value: '10:45', viewValue: '10:45'},
    {value: '11:00', viewValue: '11:00'},
    {value: '11:15', viewValue: '11:15'},
    {value: '11:30', viewValue: '11:30'},
    {value: '11:45', viewValue: '11:45'},
    {value: '12:00', viewValue: '12:00'},
    {value: '12:15', viewValue: '12:15'},
    {value: '12:30', viewValue: '12:30'},
    {value: '12:45', viewValue: '12:45'},
    {value: '13:00', viewValue: '13:00'},
    {value: '13:15', viewValue: '13:15'},
    {value: '13:30', viewValue: '13:30'},
    {value: '13:45', viewValue: '13:45'},
    {value: '14:00', viewValue: '14:00'},
    {value: '14:15', viewValue: '14:15'},
    {value: '14:30', viewValue: '14:30'},
    {value: '14:45', viewValue: '14:45'},
    {value: '15:00', viewValue: '15:00'},
    {value: '15:15', viewValue: '15:15'},
    {value: '15:30', viewValue: '15:30'},
  ];

  payments: any[] = [
    {value: 'EFT', viewValue: 'EFT'},
    {value: 'Pay In Person', viewValue: 'Pay In Person'},
  ]

  sylists:any[] = [
    {name: 'Linda', status: 'Available'},
    {name: 'Nkosi', status: 'Unavailable'},
    {name: 'Cindy', status: 'Available'},
  ]

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private snackbar: MatSnackBar
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

      //serviceForm
      this.firstFormGroup = new FormGroup({
        firstCtrl: new FormControl('', Validators.required)
      })
      //dayTimeForm
      this.secondFormGroup = new FormGroup({
        time: new FormControl('', Validators.required),
        secondCtrl: new FormControl('', Validators.required),
      })
      //professional
      this.thirdFormGroup = new FormGroup({
        thirdCtrl: new FormControl('', Validators.required)
      })
      //OrderForm
      this.orderForm = new FormGroup({
        orderDetails: new FormControl(''),
        date: new FormControl(''),
        time: new FormControl(''),
        stylist: new FormControl(''),
        email: new FormControl(''),
        paymentMethod: new FormControl(''),
      })
  }

  pickedService() {
    const selectedService = this.firstFormGroup.value.firstCtrl;
    if (!selectedService) {
      this.snackbar.open('Please select a service', 'Ok', { duration: 3000 });
    } else {
      console.log('Selected Service:', selectedService); // Logs the selected service value
      // this.orderForm.value.orderDetails = selectedService
      this.orderForm.patchValue({ orderDetails: selectedService }); // Update orderForm
      this.stepper.next()
    }
    
  }

  onDateChange(event: any): void {
    this.secondFormGroup.get('secondCtrl')?.setValue(event);
  }

  selectDayTime () {
    const selectedTime = this.secondFormGroup.value.time;
    const selectedDateTime = this.secondFormGroup.get('secondCtrl')?.value;

    const selectedDate = selectedDateTime

    // // Add one day to the selected date
      selectedDate.setDate(selectedDate.getDate() + 1);

      // // Convert the adjusted date to ISO string
      const date = selectedDate.toISOString().slice(0,10);

    const updatedSecondForm = {
        ...this.secondFormGroup.value,
        secondCtrl: date
      };

    if (!selectedDateTime || !selectedTime) {
      this.snackbar.open('Please select a Day & Time', 'Ok', { duration: 3000 });
    } else {

      console.log('updated second form:', updatedSecondForm);
      // this.orderForm.value.date = updatedSecondForm.secondCtrl
      // this.orderForm.value.time = updatedSecondForm.time
      this.orderForm.patchValue({ date, time: selectedTime }); // Update orderForm
      this.stepper.next()
    }
    
  }

  pickedStylist() {
    const selectedProfessional = this.thirdFormGroup.value.thirdCtrl;
    if (!selectedProfessional) {
      this.snackbar.open('Please select a Professional', 'Ok', { duration: 3000 });
    } else {
      console.log('Selected Professional:', selectedProfessional); // Logs the selected service value
      // this.orderForm.value.stylist = selectedProfessional
      this.orderForm.patchValue({ stylist: selectedProfessional }); // Update orderForm
      this.stepper.next()
    }
    
  }

  completeOrder() {
    const order = this.orderForm.value
    console.log('Order:', order); // Logs the selected service value
    this.stepper.reset()
  }

}
