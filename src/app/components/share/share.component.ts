import { Component } from '@angular/core';
import { ModalShareService } from 'src/app/services/modal-share.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  constructor(
    private readonly modalShareService: ModalShareService,
  ) { }
  
  public onClickSharePage(): void {
    this.modalShareService.open();
  }
}
