import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCheckModel } from './interfaces/health-check.model';
import { HealthCheckService } from './services/health-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public checkingApiHealth;

  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly router: Router,
  ) {
    this.checkingApiHealth = true;
    this.healthApiCheck();
  }
  
  private healthApiCheck(): void {
    this.healthCheckService.checkApiHealth().subscribe((response: HealthCheckModel) => {
      this.checkingApiHealth = false;
      if (response.status = 'OK') {
        this.router.navigate(['list']);
      } else {
        this.router.navigate(['retry-connection']);
      }
    }, () => {
      this.checkingApiHealth = false;
    });
  }
}
