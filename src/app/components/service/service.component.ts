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
import { Router } from '@angular/router';

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
    {src: "../../../assets/curls.png",
      title: 'French Curls',
      time: '4HRS 20MIN - 6HRS',
      price: '800',
      values: 'Order1'
    },
    {src: "../../../assets/curls2.png",
      title: 'Bob Curls',
      time: '4HRS 20MIN - 6HRS',
      price: '800',
      values: 'Order2'
    },
    {src: "../../../assets/braids.png",
      title: 'Knotless Braids',
      time: '4HRS 30MIN - 5HRS',
      price: '850',
      values: 'Order3'
    },{src: "../../../assets/braids2.png",
      title: 'Knotless Boha Braids',
      time: '4HRS 30MIN - 5HRS',
      price: '950',
      values: 'Order4'
    },{src: "../../../assets/braids3.png",
      title: 'Knotless Braids',
      time: '4HRS 30MIN - 5HRS',
      price: '850',
      values: 'Order5'
    },{src: "../../../assets/braids4.png",
      title: 'Bohamian Braids',
      time: '4HRS 30MIN - 8HRS',
      price: '950',
      values: 'Order6'
    },{src: "../../../assets/locs.png",
      title: 'Gypsy Locs',
      time: '3HRS 30MIN',
      price: '1200',
      values: 'Order7'
    },{src: "../../../assets/braids5.png",
      title: 'Knotless 2/3 Toned Braids',
      time: '4HRS 20MIN - 6HRS',
      price: '1050',
      values: 'Order8'
    },{src: "../../../assets/locs2.png",
      title: 'Jozi Lits Faux Locs',
      time: '4HRS 20MIN - 6HRS',
      price: '850',
      values: 'Order9'
    },{src: "../../../assets/fulani.png",
      title: 'Bohemian Fulani',
      time: '3HRS 30MIN - 4HRS',
      price: 'R900',
      values: 'Order10'
    },
    {src: "../../../assets/fulani2.png",
      title: 'Bohemian Fulani',
      time: '3HRS 30MIN - 4HRS',
      price: '900',
      values: 'Order11'
    },
  ]

  times: any[] = [
    {value: 'Morning (09:00)', viewValue: 'Morning (09:00)'},
    {value: 'Afternoon (13:00)', viewValue: 'Afternoon (13:00)'},
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
    private snackbar: MatSnackBar,
    private router: Router
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
        phone: new FormControl(''),
        paymentMethod: new FormControl(''),
      })
  }

  pickedService() {
    if (this.firstFormGroup.valid) {
      this.stepper.next(); // Move to the next step automatically
    }
    const selectedService = this.firstFormGroup.value.firstCtrl;
    if (!selectedService) {
      this.snackbar.open('Please select a service', 'Ok', { duration: 3000 });
    } else {
      // this.orderForm.value.orderDetails = selectedService
      this.orderForm.patchValue({ orderDetails: selectedService }); // Update orderForm
      this.stepper.next()
    }
    
  }

  goBack() {
    this.router.navigate(['/customer/home'])
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
      // this.orderForm.value.stylist = selectedProfessional
      this.orderForm.patchValue({ stylist: selectedProfessional }); // Update orderForm
      this.stepper.next()
    }
    
  }

  generateWhatsAppMessage(): string {
    const order = this.orderForm.value;

    // Construct the message
    const message = `New Order Details:\n\n` +
      `Service: ${order.orderDetails.title}\n` +
      `Price: R${order.orderDetails.price}\n` +
      `Date: ${order.date}\n` +
      `Time: ${order.time}\n` +
      `Phone: 0${order.phone}\n` +
      `Payment Method: ${order.paymentMethod}\n`;

    return encodeURIComponent(message); // Encode the message for URL
  }

  openWhatsApp() {
    const phoneNumber = '27727470809'; // Replace with the actual phone number
    const message = this.generateWhatsAppMessage();
  
    // Detect if the user is on a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Create the WhatsApp link based on the device
  const whatsappLink = isMobile
    ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}` // For mobile devices
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`; // For desktop devices
  
    // Open the link in a new tab
    window.open(whatsappLink, '_blank');
  }

  completeOrder() {
    const order = this.orderForm.value
    console.log('Order:', order); // Logs the selected service value

    // Open WhatsApp with the order details
    this.openWhatsApp();

    this.stepper.reset()
    this.router.navigate(['/customer/home'])
  }

}
