import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RetryConnectionComponent } from './retry-connection/retry-connection.component';



@NgModule({
  declarations: [
    ListComponent,
    RetryConnectionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    RetryConnectionComponent,
  ]
})
export class PagesModule { }
