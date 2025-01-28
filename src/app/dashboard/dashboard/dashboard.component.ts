import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../modules/material/material.module';
import { Chart, registerables } from 'chart.js';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, FullCalendarModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  displayedColumns = ['name', 'contact', 'ID', 'location', 'specialize', 'dateAdded', 'status'];
  ELEMENT_DATA: any[] = [
    {name: 'Linda', contact: '0733387762', ID: 1.0079, location: 'H', specialize: 'Braid', dateAdded: '2025-02-05', status: 'active'},
    {name: 'Dineo', contact: '0727729892', ID: 4.0026, location: 'He', specialize: 'Locs', dateAdded: '2025-02-11', status: 'inactive'},
    {name: 'Katt', contact: '0826653737', ID: 6.941, location: 'Li', specialize: 'Funai', dateAdded: '2025-02-02', status: 'active'},
  ];


  dataSource = this.ELEMENT_DATA;

  public chart: any;

  months:string[] = ['Jan', 'Feb', 'Mar']

  ngOnInit(): void {

    Chart.register(...registerables);

    this.createChart();
    
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'doughnut', // Change the type to 'doughnut'
      data: {
        labels: ['New Customers', 'Total'], // Labels for the donut chart
        datasets: [{
          label: 'Users', // Label for the dataset
          data: [10, 20], // Data values for the donut chart
          backgroundColor: ['red', 'green'], // Colors for the segments
          hoverOffset: 4 // Optional: Adds a hover effect
        }]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
            position: 'top', // Position of the legend
          },
          tooltip: {
            enabled: true // Enable tooltips
          }
        }
      }
    });
  }

}
