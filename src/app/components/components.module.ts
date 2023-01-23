import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HealthCheckComponent } from './health-check/health-check.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    HealthCheckComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    HealthCheckComponent,
  ]
})
export class ComponentsModule { }
