import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'app';
  public months: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  public customers: any;
  public points: any[] = [];
  constructor(private appService: AppService) {}

  
  ngOnInit() {
    this.appService.getCustomers().subscribe((data) => { 
      this.customers = data.json();
      console.log(this.customers);
    });
    
    this.appService.getMonthlyRewards(this.months).subscribe(data => {
          this.points = data;
          console.log(this.points)
        });
        
    }
  logCustomers(){
    console.log(this.customers);
  }
}
