import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HealthCheckComponent } from './health-check/health-check.component';
import { ShareComponent } from './share/share.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    HealthCheckComponent,
    ShareComponent,
  ],
  imports: [ ],
  exports: [
    SpinnerComponent,
    HealthCheckComponent,
  ]
})
export class ComponentsModule { }
