import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HealthCheckComponent } from './health-check/health-check.component';
import { ShareComponent } from './share/share.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpinnerComponent,
    HealthCheckComponent,
    ShareComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    SpinnerComponent,
    HealthCheckComponent,
    ShareComponent,
  ]
})
export class ComponentsModule { }
