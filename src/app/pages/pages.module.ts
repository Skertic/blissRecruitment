import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { RetryConnectionComponent } from './retry-connection/retry-connection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ListComponent,
    RetryConnectionComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ListComponent,
    RetryConnectionComponent,
  ]
})
export class PagesModule { }
