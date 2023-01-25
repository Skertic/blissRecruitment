import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HealthCheckComponent } from './health-check/health-check.component';
import { ShareModalComponent } from './share-modal/share-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareComponent } from './share/share.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    HealthCheckComponent,
    ShareModalComponent,
    ShareComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    SpinnerComponent,
    HealthCheckComponent,
    ShareModalComponent,
    ShareComponent,
  ]
})
export class ComponentsModule { }
