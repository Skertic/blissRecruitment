import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { RetryConnectionComponent } from './retry-connection/retry-connection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    ListComponent,
    RetryConnectionComponent,
    DetailsComponent,
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
